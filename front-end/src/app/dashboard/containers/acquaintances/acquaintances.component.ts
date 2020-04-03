import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Contact } from '../../../models/contact.interface';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';

@Component({
    selector: 'app-acquaintances',
    templateUrl: './acquaintances.component.html',
    styleUrls: ['./acquaintances.component.scss']
})
export class AcquaintancesComponent implements OnInit {
    contacts$: Observable<Contact[]>;
    total$: Observable<number>;

    constructor(private store: Store<fromStore.StoreState>) {}

    ngOnInit(): void {
        this.contacts$ = this.store.select(fromStore.getContactsForUser).pipe(
            filter(Boolean),
            map((data: Contact[]) =>
                data.filter(
                    (contact: Contact) => contact.tagSelect === 'acquaintances'
                )
            )
        );

        this.total$ = this.store.select(fromStore.getTotal);
    }
}
