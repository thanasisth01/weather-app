import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyCitiesService {

  private cities: string[] = [];
  
  addCity(city: string) {
    this.cities.push(city);
    console.log(this.cities)
  }
  
  removeCity(city: string) {
    this.cities = this.cities.filter(city => city !== 'London');
    console.log(this.cities)
  }
}
