import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signInSignUp } from '../../../animations/animations';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';
import { Message } from '../../../models/message.interface';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';

@Component({
    selector: 'app-user-authentication',
    templateUrl: './user-authentication.component.html',
    styleUrls: ['./user-authentication.component.scss'],
    animations: [signInSignUp]
})
export class UserAuthenticationComponent implements OnInit {
    logInSignUp: boolean = false;
    errorMessage: string = '';
    message: Message = undefined;

    constructor(
        private usersService: UsersService,
        private store: Store<fromStore.StoreState>,
        private router: Router
    ) {}

    ngOnInit(): void {}

    userSignUpSignIn(): void {
        this.logInSignUp = !this.logInSignUp;
        this.errorMessage = '';
    }

    handleSignIn(user: User): void {
        this.usersService.signIn(user).subscribe(
            (response: User) => {
                this.store.dispatch(new fromStore.UserLogin(response));
                this.router.navigate(['/dashboard']);
            },
            err => {
                this.errorMessage = err.error.message;
                this.message = {
                    message: this.errorMessage,
                    color: '#B00020',
                    icon: 'error_outline'
                };
            }
        );
    }

    handleSignUp(user: User): void {
        this.usersService.signUp(user).subscribe(
            (response: string) => {
                this.errorMessage = response;
                this.message = {
                    message: response,
                    color: '#43A047',
                    icon: 'done'
                };
                setTimeout(() => this.userSignUpSignIn(), 300);
            },
            err => {
                this.errorMessage = err.error.message;
                this.message = {
                    message: this.errorMessage,
                    color: '#B00020',
                    icon: 'error_outline'
                };
            }
        );
    }

    handleCloseError() {
        this.errorMessage = '';
    }
}
