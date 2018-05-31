import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Flight } from '../../../../core/api/models/flight';
import { FlightResource } from '../../../../core/api/resources/flight.resource';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;

  searchedFlights: Flight[] = [];

  @Output() searchedFlightsChange = new EventEmitter<Flight[]>();

  fr: FlightResource;

  constructor(fr: FlightResource) {
    this.fr = fr;
    this.searchFlights('', '');
  }

  // TODO Move this logic to a service
  searchFlights(f: string, t: string) {
    this.fr.find(f, t)
      .subscribe(
        newFlights => {
          this.searchedFlights = newFlights;
          this.searchedFlightsChange.next(this.searchedFlights);
        }
      );
  }

  ngOnInit() {
  }

}
