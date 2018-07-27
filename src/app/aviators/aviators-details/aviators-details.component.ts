import { Component, OnInit } from '@angular/core';
import { Aviator } from '../../models/aviators';
import { ActivatedRoute, Router} from '@angular/router';
import { AviatorService } from '../../services/aviator.service';

@Component({
  selector: 'app-aviators-details',
  templateUrl: './aviators-details.component.html',
  styleUrls: ['./aviators-details.component.css']
})
export class AviatorsDetailsComponent implements OnInit 
{
  public aviator: Aviator = new Aviator();

  constructor(public currentRoute: ActivatedRoute, public flightService: AviatorService, public router: Router) 
  { 
  }

  ngOnInit() 
  {
    if(this.currentRoute.snapshot.params['id'] != null)
    {
      console.log('С парамс все ок');
    }
    this.flightService.getAviatorById(this.currentRoute.snapshot.params['id']).subscribe(
      (data: Aviator) => {
        this.aviator = data;
      });
  }

  public editFlight(aviator: Aviator)
  {
    this.flightService.updateAviator(aviator).subscribe((data: Aviator) => this.aviator = data);
  }

  onClick()
  {
    this.router.navigate(['/aviators']);
  }
}
