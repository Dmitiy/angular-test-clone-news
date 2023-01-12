import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private apiUrl = 'https://hn.algolia.com/api/v1/';

    constructor(private _httpClient: HttpClient) {}

    getUser(username: string): Observable<IUser> {
        return this._httpClient.get<IUser>(`${this.apiUrl}users/${username}`);
    }
}
