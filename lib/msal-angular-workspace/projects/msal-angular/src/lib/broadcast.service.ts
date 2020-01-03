import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export type MessageCallback = (payload: any) => void;

@Injectable()
export class BroadcastService {
    private msalSubject: BehaviorSubject<any> ;
    private msalItems: Observable<any>;

    constructor() {
     this.msalSubject = new BehaviorSubject<any>(1);
     this.msalItems = this.msalSubject.asObservable();
    }

    broadcast(type: string , payload: any) {
        this.msalSubject.next({type , payload});
    }

    getMSALSubject() {
        return this.msalSubject;
    }

    getMSALItem() {
        return this.msalItems;
    }

    subscribe(type: string, callback: MessageCallback): Subscription {
        return this.msalItems
          .pipe(
            filter(message => message.type === type),
            map(message => message.payload)
          )
          .subscribe(callback);
    }

}
