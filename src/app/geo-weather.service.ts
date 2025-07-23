import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';
import {
  OpenWeatherMapLocationResponse,
  OpenWeatherMapResult,
} from './weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoWeatherService {
  // a http client variable
  private httpClient: HttpClient = inject(HttpClient);

  // function that returns the lat & lon of a city through an API
  getLatLon(city: string): Observable<OpenWeatherMapResult> {
    console.log('GetLatLonService is reached.');
    // URL to reach with our API key.
    var openWeatherMapURL: string = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${
      environment.apiKey
    }`;

    return this.httpClient.get<OpenWeatherMapResult>(openWeatherMapURL);
  }

  // function that returns the weather data of the geographic coordinates
  getWeatherData(
    lat: string,
    lon: string
  ): Observable<OpenWeatherMapLocationResponse> {
    // URL to reach with our API key.
    const url: string = `http://localhost:3000/weather`;
    
    return this.httpClient.get<OpenWeatherMapLocationResponse>(url, {
      params: {
        lat: lat,
        lon: lon,
      },
    });
  }
}
