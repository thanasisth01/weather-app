import { inject, Injectable } from '@angular/core';
import { GeoWeatherService } from './geo-weather.service';

import {
  emptyResp,
  type OpenWeatherMapLocationResponse,
  type OpenWeatherMapResult,
} from './weather.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchCityService {
  private emptyObj: OpenWeatherMapLocationResponse = emptyResp;
  private geoWeatherService: GeoWeatherService = inject(GeoWeatherService);
  private lat: string = '';
  private lon: string = '';

  // a function that returns the weather data
  // it receives the city that the user searched for
  async searchCity(city: string): Promise<OpenWeatherMapLocationResponse> {
    console.log(`SearchCityService is reached. City: ${city}`);

    try {
      // try getting the latitude & longtitude of the city
      var res = await this.findLatLon(city);

      // if the API returned the lat & lon
      if (res && res.length > 0) {
        this.lat = res[0].lat;
        this.lon = res[0].lon;

        // getting weather data from the API
        const weatherData: OpenWeatherMapLocationResponse =
          await this.getWeatherData();

        return weatherData;
      } else {
        // warning & returning that no results where found for that city
        console.warn('No results found for that city');

        // returning an empty object
        return this.emptyObj;
      }
    } catch (err) {
      // warning & returning that there was an error
      // fetching data for that city
      // returning an empty object
      console.error('Error fetching data:', err);
      return this.emptyObj;
    }
  }

  // finds the lat & lon of the given city
  async findLatLon(city: string): Promise<OpenWeatherMapResult> {
    return await firstValueFrom(this.geoWeatherService.getLatLon(city));
  }

  // gets the weather data for the given lat & lon
  async getWeatherData(): Promise<OpenWeatherMapLocationResponse> {
    return await firstValueFrom(
      this.geoWeatherService.getWeatherData(this.lat, this.lon)
    );
  }
}
