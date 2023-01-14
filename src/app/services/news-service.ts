import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/api/api';
@Injectable({
    providedIn: 'root',
})
export class NewsService {
    headerTags: string[] = ['new', 'past', 'comments', 'ask', 'show', 'jobs', 'submit'];
    searchParams: string[] = ['search?query=', 'search_by_date?query='];
    hasSortedParam = false;

    constructor(private _httpClient: HttpClient) {}

    private _searchUrlByTag = (tag: string) => {
        const sortedParam = this.hasSortedParam ? this.searchParams[0] : this.searchParams[1];
        const url = `${apiUrl}${sortedParam}${tag}`;
        return url;
    };

    getAllTags() {
        return this.headerTags;
    }

    getNewsByTag(tag: string = ''): Observable<any> {
        const url = this._searchUrlByTag(tag);
        return this._httpClient.get(url);
    }
}
