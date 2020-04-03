import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/app/models/navigation.interface';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    navigation: Navigation[] = [
        {
            name: 'All contacts',
            route: '/dashboard/all-contacts',
            exact: true,
            icon: 'grade'
        },
        {
            name: 'Friends',
            route: '/dashboard/friends',
            exact: false,
            icon: 'people'
        },
        {
            name: 'Family',
            route: '/dashboard/family',
            exact: false,
            icon: 'child_care'
        },
        {
            name: 'Acquaintances',
            route: '/dashboard/acquaintances',
            exact: false,
            icon: 'accessibility'
        },
        {
            name: 'Following',
            route: '/dashboard/following',
            exact: false,
            icon: 'visibility'
        }
    ];

    ngOnInit(): void {}
}
