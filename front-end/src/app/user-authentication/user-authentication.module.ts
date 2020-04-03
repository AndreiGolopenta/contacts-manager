import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import { materialComponents } from '../angular-material-components';

const ROUTES: Routes = [
    { path: '', component: fromContainers.UserAuthenticationComponent }
];

@NgModule({
    declarations: [
        ...fromComponents.components, 
        ...fromContainers.containers,
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        RouterModule.forChild(ROUTES),
        ...materialComponents
    ]
})
export class UserAuthenticationModule {}
