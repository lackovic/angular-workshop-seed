import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Flight } from '../../../core/api/models/flight';
import { FlightResource } from '../../../core/api/resources/flight.resource';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { city } from '../../../shared/validator/city';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {

  flightEditForm: FormGroup;
  public flight: Flight;

  constructor(private route: ActivatedRoute, private flightResource: FlightResource, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.flightEditForm = this.formBuilder.group({
      id: [null, Validators.required],
      from: [null, [Validators.required, city]],
      to: [null, [Validators.required, city]],
      date: [null, Validators.required]
    });
    this.route.params
      .pipe(
        map(params => params['id']),
        switchMap(id => this.flightResource.findById(id))
      )
      .subscribe(f => {
        this.flight = f;
        this.flightEditForm.patchValue(this.flight);
      });
  }

}
