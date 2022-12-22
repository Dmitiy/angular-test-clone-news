import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface INews {
	created_at: string | null;
	title: string | null;
	url: string | null;
	author: string | null;
	points: number | null;
	strory_text: string | null;
	comment_text: string | null;
	num_comments: number | null;
	story_id: number | null;
	story_title: string | null;
	story_url: string | null;
	parent_id: number | null;
	created_at_i: number | null;

}
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
