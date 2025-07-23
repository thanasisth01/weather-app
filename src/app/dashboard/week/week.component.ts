import { Component, Input } from '@angular/core';
import { DayComponent } from "../day/day.component";
import { Daily } from "../../weather.model";

@Component({
  selector: 'app-week',
  standalone: true,
  imports: [DayComponent],
  templateUrl: './week.component.html',
  styleUrl: './week.component.css'
})
export class WeekComponent {

  @Input() weekly_data!: Daily[];
}
