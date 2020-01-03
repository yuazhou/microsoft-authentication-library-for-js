import { Injectable, Inject } from '@angular/core';
import {
  ActivatedRoute,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { Location, PlatformLocation } from '@angular/common';
import { AuthResponse, AuthError, Configuration } from 'msal';
import { MSAL_CONFIG, MsalService, MSAL_CONFIG_ANGULAR } from './msal.service';
import { MsalAngularConfiguration } from './msal-angular.configuration';
import { BroadcastService } from './broadcast.service';

@Injectable({
  providedIn: 'root'
})
export class MsalGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
      @Inject(MSAL_CONFIG) private msalConfig: Configuration,
      @Inject(MSAL_CONFIG_ANGULAR) private msalAngularConfig: MsalAngularConfiguration,
      private authService: MsalService,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private location: Location,
      private platformLocation: PlatformLocation,
      private broadcastService: BroadcastService
  ) {}

  async checkAccount(): Promise<boolean> {
    if (!this.authService.getAccount()) {
        if (this.msalAngularConfig.popUp) {
            return this.authService.loginPopup({
                scopes: this.msalAngularConfig.consentScopes,
                extraQueryParameters: this.msalAngularConfig.extraQueryParameters
            })
                .then(() => true)
                .catch(() => false);
        }

        this.authService.loginRedirect({
            scopes: this.msalAngularConfig.consentScopes,
            extraQueryParameters: this.msalAngularConfig.extraQueryParameters
        });
    } else {
        return this.authService.acquireTokenSilent({
            scopes: [this.msalConfig.auth.clientId]
        })
            .then((result: AuthResponse) => {
                this.broadcastService.broadcast('msal:loginSuccess',  result);
                return true;
            })
            .catch((error: AuthError) => {
                this.broadcastService.broadcast('msal:loginFailure', error);
                return false;
            });
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAccount();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAccount();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAccount();
  }
}
