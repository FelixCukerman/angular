import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
  providers: [FlightService]
})

export class FlightListComponent implements OnInit 
{
  flight: Flight;
  flights: Flight[];
  tableMode: boolean;

  constructor(private flightService: FlightService,  private route: Router) 
  { 
    flightService.getFlight().subscribe((data: Flight[]) => this.flights = data);
    this.flight = new Flight();
    this.tableMode = true;
  }

  ngOnInit() {}

  editFlight(flight: Flight)
  {
    this.route.navigateByUrl('flights/' + flight.number);
  }

  delete(id: number) 
  {
    this.flightService.deleteFlight(id).subscribe(
    record => {
      this.flights = this.flights.filter(f => f.number != id)
    });
  }

  add(flight: Flight) 
  {
    let newFlight = Object.assign({}, flight);
    this.flightService.createFlight(newFlight).subscribe(
      record => {
        newFlight.number = this.flights[this.flights.length-1].number + 1;
        this.flights.push(newFlight);
      });
  }
}