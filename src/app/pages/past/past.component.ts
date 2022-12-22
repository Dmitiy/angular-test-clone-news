import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-past',
  standalone: true,
  imports: [CommonModule, PastComponent],
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent {

}
