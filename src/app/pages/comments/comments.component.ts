import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news-service';

@Component({
    selector: 'app-comments',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
    commentsList: any | [];
    constructor(private _route: ActivatedRoute, private _router: Router, private _newsService: NewsService) {}

    ngOnInit(): void {
        this.getAllComments();
    }

    getAllComments(): void {
        const path: string = this._route.snapshot.routeConfig?.path!;

        this._newsService.getNewsByTag(path).subscribe((res) => {
            this.commentsList = res.hits;
        });
    }

    goToUser(username: string) {
        this._router.navigate([`/users/${username}`]);
    }
}
