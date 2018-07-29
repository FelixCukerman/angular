import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Flight } from '../../models/flight';
import { FlightService} from '../../services/flight.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  public flight: Flight = new Flight();

  constructor(public currentRoute: ActivatedRoute, public flightService: FlightService, public router: Router) 
  { 
  }

  ngOnInit() 
  {
    if(this.currentRoute.snapshot.params['id'] != null)
    {
      console.log('С парамс все ок');
    }
    this.flightService.getFlightById(this.currentRoute.snapshot.params['id']).subscribe(
      (data: Flight) => {
        this.flight = data;
      });
  }

  public editFlight(flight: Flight)
  {
    this.flightService.updateFlight(flight).subscribe((data: Flight) => this.flight = data);
  }

  onClick()
  {
    this.router.navigate(['/flights']);
  }
}