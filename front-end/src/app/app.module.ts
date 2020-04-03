import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, effects } from './store';

import { AppComponent } from './app.component';
import * as fromComponents from './components';

const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'authentication' },
    {
        path: 'authentication',
        loadChildren: () =>
            import('./user-authentication/user-authentication.module').then(
                m => m.UserAuthenticationModule
            )
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    }
];

@NgModule({
    declarations: [AppComponent, ...fromComponents.components],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(ROUTES),
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
