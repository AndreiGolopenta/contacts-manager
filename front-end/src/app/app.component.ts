import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    token$: Observable<string>;
    email$: Observable<string>;
    subscription: Subscription;

    constructor(
        private store: Store<fromStore.StoreState>,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.token$ = this.store.select(fromStore.getToken);
        this.email$ = this.store.select(fromStore.getEmail);

        this.subscription = this.token$
            .pipe(
                filter(Boolean),
                map((token: string) =>
                    this.store.dispatch(new fromStore.LoadContacts(token))
                )
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    logout() {
        this.store.dispatch(new fromStore.UserLogout());
        this.router.navigate(['/authentication']);
    }
}
