import { Component, OnInit } from '@angular/core';
import { Crew } from '../../models/crews';
import { CrewService } from '../../services/crew.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crews-list',
  templateUrl: './crews-list.component.html',
  styleUrls: ['./crews-list.component.css']
})
export class CrewsListComponent implements OnInit 
{
  crew: Crew;
  crews: Crew[];
  tableMode: boolean;

  constructor(private crewService: CrewService,  private route: Router) 
  { 
    crewService.getCrews().subscribe((data: Crew[]) => {
      this.crews = data;
    });
    
    this.crew = new Crew();
    this.tableMode = true;
  }

  ngOnInit() {}

  editDeparture(crew: Crew)
  {
    this.route.navigateByUrl('crews/' + crew.id);
  }

  delete(id: number) 
  {
    this.crewService.deleteCrew(id).subscribe(
    record => {
      this.crews = this.crews.filter(f => f.id != id)
    });
  }

  add(crew: Crew) 
  {
    let newFlight = Object.assign({}, crew);
    this.crewService.createCrew(newFlight).subscribe(
      record => {
        newFlight.id = this.crew[this.crews.length-1].number + 1;
        this.crews.push(newFlight);
      });
  }
}
