import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../../../core/api/models/flight';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() selectedFlights: Flight[] = [];

  constructor() { }

  ngOnInit() {
  }

  deleteAllFlights() {
    this.selectedFlights = [];
  }

}
