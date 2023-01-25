import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news-service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    headerTags: string[] = this.newsService.getHeaderTagsList();
    constructor(public newsService: NewsService) {}

    onOpenLink(tag: string) {
        this.newsService.getNewsByTag(tag);
    }
}
