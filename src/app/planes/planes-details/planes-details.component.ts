import { Component, OnInit } from '@angular/core';
import { Plane } from '../../models/planes';
import { PlaneService } from '../../services/plane.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planes-details',
  templateUrl: './planes-details.component.html',
  styleUrls: ['./planes-details.component.css']
})
export class PlanesDetailsComponent implements OnInit 
{
  public plane: Plane = new Plane();

  constructor(public currentRoute: ActivatedRoute, public planeService: PlaneService, public router: Router) 
  { 
  }

  ngOnInit() 
  {
    if(this.currentRoute.snapshot.params['id'] != null)
    {
      console.log('С парамс все ок');
    }
    this.planeService.getPlaneById(this.currentRoute.snapshot.params['id']).subscribe(
      (data: Plane) => {
        this.plane = data;
      });
  }

  public editCrew(stewardess: Plane)
  {
    this.planeService.updatePlane(stewardess).subscribe((data: Plane) => this.plane = data);
  }

  onClick()
  {
    this.router.navigate(['/planes']);
  }
}
