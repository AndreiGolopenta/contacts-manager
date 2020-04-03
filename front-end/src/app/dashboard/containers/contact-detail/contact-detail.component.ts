import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
import { Contact, ContactToken } from '../../../models/contact.interface';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit, OnDestroy {
    contact$: Observable<Contact>;
    id: string;
    subscriptions: Subscription[] = [];

    constructor(
        private activatedRouter: ActivatedRoute,
        private router: Router,
        private store: Store<fromStore.StoreState>,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.contact$ = this.activatedRouter.params.pipe(
            map(params => params.id),
            switchMap((id: string) => {
                return this.store.select(fromStore.getContactsForUser).pipe(
                    map((contacts: Contact[]) => {
                        this.id = id;
                        return contacts.filter(
                            (contact: Contact) => contact._id === id
                        )[0];
                    })
                );
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => {
            if (sub) {
                sub.unsubscribe();
                console.log('unsubscribe', sub);
            }
        });
    }

    handleUpdateContact(contact: Contact) {
        this.subscriptions.push(
            this.store
                .select(fromStore.getToken)
                .pipe(
                    map((token: string) => {
                        const request: ContactToken = {
                            contact,
                            id: this.id,
                            token
                        };
                        return this.store.dispatch(
                            new fromStore.UpdateContact(request)
                        );
                    })
                )
                .subscribe()
        );
        this.router.navigate(['/dashboard']);
    }

    handleDeleteContact(contact: Contact) {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '45rem',
            height: '17rem',
            data: contact.name
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.subscriptions.push(
                    this.store
                        .select(fromStore.getToken)
                        .pipe(
                            map((token: string) => {
                                return this.store.dispatch(
                                    new fromStore.DeleteContact({
                                        contact,
                                        token
                                    })
                                );
                            })
                        )
                        .subscribe()
                );
                this.router.navigate(['/dashboard']);
            }
        });
    }
}
