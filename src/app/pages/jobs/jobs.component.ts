import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-jobs',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {}
