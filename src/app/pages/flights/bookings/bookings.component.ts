import { Component } from '@angular/core';
import { Flight } from '../../../core/api/models/flight';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html'
})
export class BookingsComponent {
  selectedFlights: Flight[] = [];
  searchedFlights: Flight[] = [];

  flightSelectionChange(flight: Flight) {
    const index = this.selectedFlights.indexOf(flight);
    if (index === -1) {
      this.selectedFlights.push(flight);
    } else {
      delete this.selectedFlights[index];
    }

  }
}
