import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-test-clone-news';
    isValidUser$: Observable<boolean>;
    constructor(private _auth: AuthService) {
        this.isValidUser$ = this._auth.isLoggedIn$;
    }

    onLogout() {
        this._auth.logout();
    }
}
