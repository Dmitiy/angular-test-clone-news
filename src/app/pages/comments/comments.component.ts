import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '@services/news-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-comments',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
    commentsList$ = [];
    constructor(private _route: ActivatedRoute, private _router: Router, private _newsService: NewsService) {}

    ngOnInit(): void {
        this.getAllComments();
    }

    getAllComments(): void {
        // const path: string = this._route.snapshot.routeConfig?.path!;
        // console.log('ss', this._newsService.getNews());
        // this.commentsList$ = this._newsService.getNews();
        this._newsService.getNews().subscribe((v) => console.log(v));
    }

    goToUser(username: string) {
        this._router.navigate([`/users/${username}`]);
    }
}
