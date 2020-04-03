import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    @Input() contacts: Contact[];

    ngOnInit(): void {}
}
