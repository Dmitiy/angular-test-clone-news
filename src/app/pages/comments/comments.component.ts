import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news-service';

@Component({
	selector: 'app-comments',
	standalone: true,
	imports: [CommonModule, CommentsComponent],
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
	commentsList: any | [];
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private newsService: NewsService,
	) { }

	ngOnInit(): void {
		this.getAllComments();
	}

	getAllComments(): void {
		let path: string = this.route.snapshot.routeConfig?.path!;

		this.newsService.getNewsByTag(path).subscribe(res => {
			this.commentsList = res.hits;
		});
	}

	goToUser(username: string) {
		this.router.navigate([`/users/${username}`]);
	}
}
