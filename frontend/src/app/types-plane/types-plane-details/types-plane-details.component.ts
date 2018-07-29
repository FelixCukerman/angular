import { Component, OnInit } from '@angular/core';
import { TypePlane } from '../../models/typesPlane';
import { TypePlaneService } from '../../services/typesPlane.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-types-plane-details',
  templateUrl: './types-plane-details.component.html',
  styleUrls: ['./types-plane-details.component.css']
})
export class TypesPlaneDetailsComponent implements OnInit 
{
  public typesPlane: TypePlane = new TypePlane();

  constructor(public currentRoute: ActivatedRoute, public typePlaneService: TypePlaneService, public router: Router) 
  { 
  }

  ngOnInit() 
  {
    if(this.currentRoute.snapshot.params['id'] != null)
    {
      console.log('С парамс все ок');
    }
    this.typePlaneService.getTypePlaneById(this.currentRoute.snapshot.params['id']).subscribe(
      (data: TypePlane) => {
        this.typesPlane = data;
      });
  }

  public editTypePlane(stewardess: TypePlane)
  {
    this.typePlaneService.updateTypePlane(stewardess).subscribe((data: TypePlane) => this.typesPlane = data);
  }

  onClick()
  {
    this.router.navigate(['/typesplane']);
  }
}
