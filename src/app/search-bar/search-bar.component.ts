import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { SearchCityService } from '../search-city.service';
import { OpenWeatherMapLocationResponse } from '../weather.model';
import { WeekComponent } from '../dashboard/week/week.component';
import { CurrentComponent } from '../current/current.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  private searchService: SearchCityService = inject(SearchCityService);

  searchCity = '';
  private res!: OpenWeatherMapLocationResponse;

  visible: boolean = false;
  weather_info!: OpenWeatherMapLocationResponse;

  @Output() appearDashboard = new EventEmitter();

  async onSearchCity() {
    if (this.searchCity === '') {
      alert('Enter city please!');
    } else {
      this.res = await this.searchService.searchCity(this.searchCity);

      if (this.res) {
        this.weather_info = this.res;
        this.appearDashboard.emit(this.weather_info);
      }
    }
  }
}
