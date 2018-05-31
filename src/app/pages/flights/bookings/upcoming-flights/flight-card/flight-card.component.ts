import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Flight } from '../../../../../core/api/models/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  @Input() flight: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<Flight>();

  constructor() { }

  toggleSelection() {
    this.selected = !this.selected;
    this.selectedChange.next(this.flight);
  }

  ngOnInit() {
  }

}
