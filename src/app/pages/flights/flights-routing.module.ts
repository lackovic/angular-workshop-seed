import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FlightEditComponent } from './edit/flight-edit.component';
import { Error404Component } from '../error404/error404.component';

const FLIGHTS_ROUTES: Routes = [
  {
    path: '',
    component: FlightsComponent,
    children: [
      { path: '', redirectTo: 'bookings', pathMatch: 'full' },
      { path: 'bookings', component: BookingsComponent },
      { path: 'edit/:id', component: FlightEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(FLIGHTS_ROUTES)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
