import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-new',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss'],
})
export class NewComponent {}
