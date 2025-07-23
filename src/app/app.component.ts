import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { emptyResp, OpenWeatherMapLocationResponse } from './weather.model';
import { MyCitiesDashboardComponent } from './my-cities-dashboard/my-cities-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchBarComponent,
    DashboardComponent,
    MyCitiesDashboardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  visible = signal(false);
  somethingPinned = signal(false);

  weather_info: OpenWeatherMapLocationResponse = emptyResp;

  onAppearDashboard(weather_info: OpenWeatherMapLocationResponse) {
    this.visible.set(true);
    this.weather_info = weather_info;
  }

  pinCity(city_weather_info: OpenWeatherMapLocationResponse) {
    this.somethingPinned.set(true);
  }

  unpinCity(city: string) {
    
  }
}
