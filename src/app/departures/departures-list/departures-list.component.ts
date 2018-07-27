import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../../services/departure.service';
import { Departure } from '../../models/departures';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departures-list',
  templateUrl: './departures-list.component.html',
  styleUrls: ['./departures-list.component.css'],
  providers: [DepartureService]
})

export class DeparturesListComponent implements OnInit 
{
  departure: Departure;
  departures: Departure[];
  tableMode: boolean;

  constructor(private aviatorService: DepartureService,  private route: Router) 
  { 
    aviatorService.getDepartures().subscribe((data: Departure[]) => {
      this.departures = data;
    });
    
    this.departure = new Departure();
    this.tableMode = true;
  }

  ngOnInit() {}

  editDeparture(departure: Departure)
  {
    this.route.navigateByUrl('departures/' + departure.id);
  }

  delete(id: number) 
  {
    this.aviatorService.deleteDeparture(id).subscribe(
    record => {
      this.departures = this.departures.filter(f => f.id != id)
    });
  }

  add(aviator: Departure) 
  {
    let newFlight = Object.assign({}, aviator);
    this.aviatorService.createDeparture(newFlight).subscribe(
      record => {
        newFlight.id = this.departure[this.departures.length-1].number + 1;
        this.departures.push(newFlight);
      });
  }
}