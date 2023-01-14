/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { IMockUser, MockUserEnum } from '../models/IMockUser';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isLoggedIn$ = new BehaviorSubject<boolean>(false);
    // private _userSubject: BehaviorSubject<IMockUser>;
    // public mockValidUser$: Observable<IMockUser>;

    constructor(private _router: Router, private _route: ActivatedRoute) {
        // this._userSubject = new BehaviorSubject<IMockUser>(JSON.parse(localStorage.getItem('user')));
        // this.mockValidUser$ = this._userSubject.asObservable();
    }

    login(userValue: IMockUser) {
        localStorage.setItem('user', JSON.stringify(userValue));
        const { name, email } = userValue;

        const isFailUser = name === null || email === null || name?.trim().length === 0 || email?.trim().length === 0;
        const isValidUser = name?.toLowerCase() === MockUserEnum.name && email?.toLowerCase() === MockUserEnum.email;

        if (isFailUser) {
            localStorage.removeItem('user');
            this.isLoggedIn$.next(false);
            return;
        }

        if (isValidUser) {
            this.isLoggedIn$.next(true);
            this._router.navigate(['/']);
        } else {
            this.isLoggedIn$.next(false);
            this._router.navigate(['/welcome']);
        }
    }

    logout() {
        localStorage.removeItem('user');
        this.isLoggedIn$.next(false);
        this._router.navigate(['/welcome']);
    }
}
