import {
  Component,
  inject,
  Input,
  Output,
  signal,
  OnChanges,
  EventEmitter,
} from '@angular/core';
import { CurrentComponent } from '../current/current.component';
import { WeekComponent } from './week/week.component';
import { OpenWeatherMapLocationResponse } from '../weather.model';
import { MyCitiesService } from '../my-cities.service';
import { MyCitiesDashboardComponent } from "../my-cities-dashboard/my-cities-dashboard.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrentComponent, WeekComponent, MyCitiesDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private myCitiesService: MyCitiesService = inject(MyCitiesService);
  @Input() weather_info!: OpenWeatherMapLocationResponse;
  @Input() city!: string;
  isPinned = signal(false);

  @Output() pinCity = new EventEmitter();
  @Output() unpinCity = new EventEmitter();


  onPinCity() {
    this.isPinned.set(true);
    this.myCitiesService.addCity(this.city);

    this.pinCity.emit(this.weather_info);
    // send message to app.component.ts to make my-cities appear (update service)
  }

  onUnpinCity() {
    this.isPinned.set(false);
    this.myCitiesService.removeCity(this.city);

    // send message to app.component.ts to make my-cities disappear (update service)

  }
}
