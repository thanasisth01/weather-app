import { Component, Input } from '@angular/core';
import { CurrentComponent } from "../current/current.component";
import { emptyResp, OpenWeatherMapLocationResponse } from '../weather.model';

@Component({
  selector: 'app-my-cities-dashboard',
  standalone: true,
  imports: [CurrentComponent],
  templateUrl: './my-cities-dashboard.component.html',
  styleUrl: './my-cities-dashboard.component.css'
})
export class MyCitiesDashboardComponent {
  @Input() weather_info: OpenWeatherMapLocationResponse = emptyResp;

}
