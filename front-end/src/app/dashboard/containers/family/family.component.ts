import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.interface';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import { map, filter } from 'rxjs/operators';

@Component({
    selector: 'app-family',
    templateUrl: './family.component.html',
    styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
    contacts$: Observable<Contact[]>;
    total$: Observable<number>;

    constructor(private store: Store<fromStore.StoreState>) {}

    ngOnInit(): void {
        this.contacts$ = this.store.select(fromStore.getContactsForUser).pipe(
            filter(Boolean),
            map((data: Contact[]) =>
                data.filter(
                    (contact: Contact) => contact.tagSelect === 'family'
                )
            )
        );

        this.total$ = this.store.select(fromStore.getTotal);
    }
}
