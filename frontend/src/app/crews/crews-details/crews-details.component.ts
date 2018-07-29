import { Component, OnInit } from '@angular/core';
import { Crew } from '../../models/crews';
import { ActivatedRoute, Router } from '@angular/router';
import { CrewService } from '../../services/crew.service';

@Component({
  selector: 'app-crews-details',
  templateUrl: './crews-details.component.html',
  styleUrls: ['./crews-details.component.css']
})
export class CrewsDetailsComponent implements OnInit 
{
  crew: Crew = new Crew();

  constructor(public currentRoute: ActivatedRoute, public crewService: CrewService, public router: Router) 
  { 
  }

  ngOnInit() 
  {
    if(this.currentRoute.snapshot.params['id'] != null)
    {
      console.log('С парамс все ок');
    }
    this.crewService.getCrewById(this.currentRoute.snapshot.params['id']).subscribe(
      (data: Crew) => {
        this.crew = data;
      });
  }

  public editCrew(crew: Crew)
  {
    this.crewService.updateCrew(crew).subscribe((data: Crew) => this.crew = data);
  }

  onClick()
  {
    this.router.navigate(['/crews']);
  }
}
