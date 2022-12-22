import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class NewsService {
	headerTags: string[] = ['new', 'past', 'comments', 'ask', 'show', 'jobs', 'submit'];
	searchParams: string[] = ['search?query=', 'search_by_date?query='];
	hasSortedParam = false;

	private apiUrl = 'https://hn.algolia.com/api/v1/';

	constructor(private httpClient: HttpClient) { }

	private searchUrlByTag = (tag: string) => {
		return `${this.apiUrl}${this.hasSortedParam
			? this.searchParams[0]
			: this.searchParams[1]
			}${!!tag.trim() ? tag : ''}`;
	}

	getAllTags() {
		return this.headerTags;
	}

	getNewsByTag(tag: string): Observable<any> {
		let url = this.searchUrlByTag(tag);
		return this.httpClient.get(url);
	}
}
