import { Component, OnInit } from '@angular/core';
import { Stewardess } from '../../models/stewardesses';
import { StewardessService } from '../../services/stewardess.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stewardesses-details',
  templateUrl: './stewardesses-details.component.html',
  styleUrls: ['./stewardesses-details.component.css']
})
export class StewardessesDetailsComponent implements OnInit 
{
  public stewardess: Stewardess = new Stewardess();

  constructor(public currentRoute: ActivatedRoute, public stewardessService: StewardessService, public router: Router) 
  { 
  }

  ngOnInit() 
  {
    if(this.currentRoute.snapshot.params['id'] != null)
    {
      console.log('С парамс все ок');
    }
    this.stewardessService.getStewardessById(this.currentRoute.snapshot.params['id']).subscribe(
      (data: Stewardess) => {
        this.stewardess = data;
      });
  }

  public editCrew(stewardess: Stewardess)
  {
    this.stewardessService.updateStewardess(stewardess).subscribe((data: Stewardess) => this.stewardess = data);
  }

  onClick()
  {
    this.router.navigate(['/stewardesses']);
  }
}
