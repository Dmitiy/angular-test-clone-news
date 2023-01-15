import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private _router: Router, private _auth: AuthService) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true;
        // .isLoggedIn()
        // .pipe(map((isLoggedIn) => isLoggedIn || this._router.createUrlTree(['/welcome'])));

        // this._auth.isLoggedIn$ || this._router.createUrlTree(['/welcome'])
    }
}
