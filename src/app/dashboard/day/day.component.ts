import { Component, Input } from '@angular/core';
import { Daily } from '../../weather.model';
import { DatePipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [PercentPipe, DatePipe],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css',
})
export class DayComponent {
  @Input() daily_data!: Daily;

  private timestamp!: number;
  date!: Date;

  ngOnInit() {
    // assuming daily_data is already loaded here
    if (this.daily_data && this.daily_data['dt']) {
      this.timestamp = this.daily_data['dt'];
      this.date = new Date(this.timestamp * 1000);
    }
  }
}
