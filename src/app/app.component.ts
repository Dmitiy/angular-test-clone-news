import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'angular-test-clone-news';
    isValidUser$: Observable<boolean>;

    constructor(private _auth: AuthService) {
        this.isValidUser$ = this._auth.isLoggedIn$.pipe(map((isLoggedIn) => isLoggedIn));
    }

    onLogout() {
        this._auth.logout();
    }
}
