import { Component, Input } from '@angular/core';
import { Current } from '../weather.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-current',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './current.component.html',
  styleUrl: './current.component.css'
})
export class CurrentComponent {

  @Input() current_data!: Current;

  today = new Date();
}
