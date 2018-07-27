import { Component, OnInit } from '@angular/core';
import { Departure } from '../../models/departures';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartureService } from '../../services/departure.service';

@Component({
  selector: 'app-departures-details',
  templateUrl: './departures-details.component.html',
  styleUrls: ['./departures-details.component.css'],
  providers: [DepartureService]
})
export class DeparturesDetailsComponent implements OnInit 
{
  public departure: Departure = new Departure();

  constructor(public currentRoute: ActivatedRoute, public departureService: DepartureService, public router: Router) 
  { 
  }

  ngOnInit() 
  {
    if(this.currentRoute.snapshot.params['id'] != null)
    {
      console.log('С парамс все ок');
    }
    this.departureService.getDepartureById(this.currentRoute.snapshot.params['id']).subscribe(
      (data: Departure) => {
        this.departure = data;
      });
  }

  public editDeparture(departure: Departure)
  {
    this.departureService.updateDeparture(departure).subscribe((data: Departure) => this.departure = data);
  }

  onClick()
  {
    this.router.navigate(['/departures']);
  }
}