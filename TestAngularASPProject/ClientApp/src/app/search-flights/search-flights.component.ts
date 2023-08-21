import { Component } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent {
  ngOnInit(): void {
    window.console.log('Hello, from the SearchFlightsComponent!');
  }
}
