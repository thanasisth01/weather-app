import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { SearchCityService } from '../search-city.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  
  private searchService: SearchCityService = inject(SearchCityService);

  searchCity = "";
  
  onSearchCity() {
    this.searchService.searchCity(this.searchCity);
  }
}
