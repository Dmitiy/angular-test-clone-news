/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, delay, map, Observable, of, Subject, tap } from 'rxjs';
import { IMockUser, MockUserEnum } from '../models/IMockUser.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public isLoggedIn$: Observable<boolean> = of(false);
    private _userSubject$: BehaviorSubject<IMockUser>;
    private _mockUser$: Observable<IMockUser>;

    constructor(private _router: Router, private _route: ActivatedRoute) {
        const mockUser = localStorage.getItem('mockUser');
        this._userSubject$ = new BehaviorSubject<IMockUser>(mockUser && JSON.parse(mockUser));
        this._mockUser$ = this._userSubject$.asObservable();
    }

    private _checkValidUser(userValue: IMockUser) {
        const { name, email } = userValue;
        const isValidUser =
            name?.toLowerCase().trim() === MockUserEnum.name && email?.toLowerCase().trim() === MockUserEnum.email;
        return isValidUser;
    }

    login(userValue: IMockUser) {
        const isValidUser = this._checkValidUser(userValue);

        if (isValidUser) {
            localStorage.setItem('mockUser', JSON.stringify(userValue));
            this._router.navigate(['/']);
        } else {
            // this.isLoggedIn$.next(false);
            this._router.navigate(['/welcome']);
        }
    }

    logout() {
        localStorage.removeItem('mockUser');
        // this.isLoggedIn$;
        this._router.navigate(['/welcome']);
    }

    isLoggedIn() {
        const mockUser = localStorage.getItem('mockUser');
        console.log(this._checkValidUser(mockUser && JSON.parse(mockUser)));

        return of(this._checkValidUser(mockUser && JSON.parse(mockUser)));
    }
}
