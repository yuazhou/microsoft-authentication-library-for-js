import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { MSAL_CONFIG, MSAL_CONFIG_ANGULAR } from '@azure/msal-angular';

if (environment.production) {
  enableProdMode();
}

fetch('/assets/configuration.json')
  .then(response => response.json())
  .then(json => {
    platformBrowserDynamic([
      { provide: MSAL_CONFIG, useValue: json.msal },
      { provide: MSAL_CONFIG_ANGULAR, useValue: json.angular }
    ])
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });
