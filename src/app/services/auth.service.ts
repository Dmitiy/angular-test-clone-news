/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { IMockUser, MockUserEnum } from '../models/IMockUser.interface';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public isLoggedIn$ = new Subject<boolean>();
    mockUser: IMockUser;
    constructor(private _router: Router, private _route: ActivatedRoute, private _storage: StorageService) {
        this.mockUser = this._storage.getDataFromStorage('mockUser', 'session');
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
            this._storage.putDataToStorage('mockUser', userValue, 'session');
            this.isLoggedIn$.next(true);
            this._router.navigate(['/']);
        } else {
            this.isLoggedIn$.next(false);
            this._router.navigate(['/welcome']);
        }
    }

    logout() {
        this._storage.removeItemFromStorage('mockUser', 'session');
        this.isLoggedIn$.next(false);
        this._router.navigate(['/welcome']);
    }

    isLoggedIn() {
        const mockUser = this._storage.getDataFromStorage('mockUser', 'session');
        this.isLoggedIn$.next(this._checkValidUser(mockUser));
        return this.isLoggedIn$;
    }
}
