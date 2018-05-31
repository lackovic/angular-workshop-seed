import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Flight } from '../../../../core/api/models/flight';

@Component({
  selector: 'app-upcoming-flights',
  templateUrl: './upcoming-flights.component.html',
  styleUrls: ['./upcoming-flights.component.scss']
})
export class UpcomingFlightsComponent implements OnInit {
  @Input() searchedFlights: Flight[] = [];
  @Input() selectedFlights: Flight[] = [];
  @Output() selectedFlightChange = new EventEmitter<Flight>();

  constructor() { }

  ngOnInit() {
  }

  selectFlight(flight: Flight) {
    this.selectedFlightChange.next(flight);
  }

}
