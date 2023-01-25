import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, shareReplay, Subject, BehaviorSubject, of } from 'rxjs';
import { apiUrl } from '@api/api';
import { headerTags, searchParams } from '@models/ITagsFilter.interface';
@Injectable({
    providedIn: 'root',
})
export class NewsService {
    headerTagsList: string[] = headerTags;
    searchParamsFilter: string[] = searchParams;
    url: string = '';
    constructor(private _httpClient: HttpClient) {}

    getHeaderTagsList() {
        return this.headerTagsList;
    }

    getNewsByTag(tag: string) {
        const url = `${apiUrl}${tag}`;
        return this._httpClient.get(url).pipe(shareReplay());
    }

    prepareUrl(searchParam: string, tagList: string[]) {
        const tags = tagList.join(',');

        if (tagList?.length > 1) {
            this.url = `${apiUrl}${searchParam}?tags=(${tags})`;
        } else if (tagList?.length === 1) {
            this.url = `${apiUrl}${searchParam}?tags=${tags}`;
        } else {
            this.url = `${apiUrl}${searchParam}?query=`;
        }
        console.log(this.url, 'prepare');
    }

    getNews() {
        console.log('ssssss: ', this.url);

        // return this._httpClient.get(url, { params: new HttpParams({ fromString: tags }) }).pipe(shareReplay());
        return of(this._httpClient.get(this.url));
    }
}
