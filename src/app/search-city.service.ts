import { inject, Injectable } from '@angular/core';
import { GetLatLonService } from './get-lat-lon.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';
import type { OpenWeatherMapResult } from './weather.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchCityService {
  private latlonService: GetLatLonService = inject(GetLatLonService);
  private httpClient: HttpClient = inject(HttpClient);

  private city_geo: OpenWeatherMapResult = [];

  searchCity(city: string) {
    console.log(`SearchCityService is reached. City: ${city}`);

    this.getLatLongFromCity(city);
    console.log(`Back to SearchCityService`);

    // console.log(link);
  }

  async getLatLongFromCity(city: string) {
    try {
      var res = await this.callLatLonService(city);
      if (res && res.length > 0) {
        console.log('Lat:', res[0].lat);
        this.city_geo[0] = res[0];
        // callTheSearchCityWeather
        var link: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.city_geo[0].lat}&lon=${this.city_geo[0].lon}&appid=${environment.apiKey}`;
        this.httpClient.get(link).subscribe({
          next: (resData) => {
            console.log(resData);
          },
        });
      } else {
        console.warn('No results found for that city');
        this.city_geo = [];
      }
      console.log('Result:', res);
    } catch (err) {
      console.error('Error fetching data:', err);
      this.city_geo = [];
    }
  }

  async callLatLonService(city: string): Promise<OpenWeatherMapResult> {
    return await firstValueFrom(this.latlonService.getLatLon(city));
  }
}
