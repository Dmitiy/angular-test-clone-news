import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';
import { apiUrl } from 'src/api/api';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private _httpClient: HttpClient) {}

    getUser(username: string): Observable<IUser> {
        return this._httpClient.get<IUser>(`${apiUrl}users/${username}`);
    }
}
