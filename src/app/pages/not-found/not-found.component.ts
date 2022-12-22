import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-not-found',
	standalone: true,
	imports: [CommonModule, NotFoundComponent],
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
	notFoundPage = 'Страница не найдена';
}