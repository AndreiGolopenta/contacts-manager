import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../../models/message.interface';
import { scale } from 'src/app/animations/animations';

@Component({
    selector: 'app-error-message',
    templateUrl: './error-message.component.html',
    styleUrls: ['./error-message.component.scss'],
    animations: [scale]
})
export class ErrorMessageComponent implements OnInit {
    closeButtonAnimate: boolean = false;

    @Input() data: Message;

    @Output() closeErrorMessage = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    close() {
        this.closeErrorMessage.emit();
    }

    animateButton() {
        this.closeButtonAnimate = true;
    }

    animateButtonReset() {
        this.closeButtonAnimate = false;
    }
}
