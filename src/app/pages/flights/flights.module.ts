import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { BookingsComponent } from './bookings/bookings.component';
import { FlightCardComponent } from './bookings/upcoming-flights/flight-card/flight-card.component';
import { BasketComponent } from './bookings/basket/basket.component';
import { UpcomingFlightsComponent } from './bookings/upcoming-flights/upcoming-flights.component';
import { FlightSearchComponent } from './bookings/search/flight-search.component';
import { FlightEditComponent } from './edit/flight-edit.component';
import { FlightsComponent } from './flights.component';
import { Routes } from '@angular/router';
import { Error404Component } from '../error404/error404.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlightsRoutingModule
  ],
  declarations: [
    BookingsComponent,
    FlightCardComponent,
    BasketComponent,
    UpcomingFlightsComponent,
    FlightSearchComponent,
    FlightEditComponent,
    FlightsComponent
  ]
})
export class FlightsModule { }
