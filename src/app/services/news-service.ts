import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    headerTags: string[] = ['new', 'past', 'comments', 'ask', 'show', 'jobs', 'submit'];
    searchParams: string[] = ['search?query=', 'search_by_date?query='];
    hasSortedParam = false;

    private _apiUrl = 'https://hn.algolia.com/api/v1/';

    constructor(private _httpClient: HttpClient) {}

    private searchUrlByTag = (tag: string) => {
        return `${this._apiUrl}${this.hasSortedParam ? this.searchParams[0] : this.searchParams[1]}${
            tag.trim() ? tag : ''
        }`;
    };

    getAllTags() {
        return this.headerTags;
    }

    getNewsByTag(tag: string): Observable<any> {
        const url = this.searchUrlByTag(tag);
        return this._httpClient.get(url);
    }
}
