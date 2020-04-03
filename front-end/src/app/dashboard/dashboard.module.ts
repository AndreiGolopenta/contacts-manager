import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import { materialComponents } from '../angular-material-components';

import { AuthGuard } from '../guards/auth.guard';

const ROUTES: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'all-contacts' },
            { path: 'all-contacts', component: fromContainers.ContactsComponent },
            { path: 'friends', component: fromContainers.FriendsComponent },
            { path: 'family', component: fromContainers.FamilyComponent },
            { path: 'acquaintances', component: fromContainers.AcquaintancesComponent },
            { path: 'following', component: fromContainers.FollowingComponent },
            { path: 'new-contact', component: fromContainers.NewContactComponent },
            { path: ':id', component: fromContainers.ContactDetailComponent }
        ]
    }
];

@NgModule({
    declarations: [
        ...fromContainers.containers,
        ...fromComponents.components
    ],
    imports: [
        CommonModule, 
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule,
        ...materialComponents
    ]
})
export class DashboardModule {}
