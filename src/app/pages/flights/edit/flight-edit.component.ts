import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Flight } from '../../../core/api/models/flight';
import { FlightResource } from '../../../core/api/resources/flight.resource';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {

  public flight: Flight;

  constructor(private route: ActivatedRoute, private flightResource: FlightResource) {

  }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => params['id']),
        switchMap(id => this.flightResource.findById(id))
      )
      .subscribe(f => {
        // this.flight.id = p['id'];
        console.log(f);
        this.flight = f;
      });
  }

}
