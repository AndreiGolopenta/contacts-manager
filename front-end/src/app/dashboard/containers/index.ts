import { ContactsComponent } from './contacts/contacts.component';
import { FamilyComponent } from './family/family.component';
import { FriendsComponent } from './friends/friends.component';
import { AcquaintancesComponent } from './acquaintances/acquaintances.component';
import { FollowingComponent } from './following/following.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

export const containers: any[] = [
    ContactsComponent,
    FamilyComponent,
    FriendsComponent,
    AcquaintancesComponent,
    FollowingComponent,
    NewContactComponent,
    ContactDetailComponent
];

export * from './contacts/contacts.component';
export * from './family/family.component';
export * from './friends/friends.component';
export * from './acquaintances/acquaintances.component';
export * from './following/following.component';
export * from './new-contact/new-contact.component';
export * from './contact-detail/contact-detail.component';