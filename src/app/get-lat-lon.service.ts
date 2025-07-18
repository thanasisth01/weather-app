import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';
import { OpenWeatherMapResult } from './weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetLatLonService {

  private httpClient: HttpClient = inject(HttpClient);
  
  getLatLon(city: string): Observable<OpenWeatherMapResult> {
    console.log("GetLatLonService is reached.")
    var openWeatherMapURL: string = `https://api.openweathermap.org/geo/2.5/direct?q=${city}&limit=${1}&appid=${environment.apiKey}`

    return this.httpClient.get<OpenWeatherMapResult>(openWeatherMapURL);
  }
}

