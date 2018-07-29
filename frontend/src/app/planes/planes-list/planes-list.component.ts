import { Component, OnInit } from '@angular/core';
import { Plane } from '../../models/planes';
import { PlaneService } from '../../services/plane.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planes-list',
  templateUrl: './planes-list.component.html',
  styleUrls: ['./planes-list.component.css']
})
export class PlanesListComponent implements OnInit 
{
  plane: Plane;
  planes: Plane[];
  tableMode: boolean;

  constructor(private planeService: PlaneService,  private route: Router) 
  { 
    planeService.getPlane().subscribe((data: Plane[]) => {
      this.planes = data;
    });
    
    this.plane = new Plane();
    this.tableMode = true;
  }

  ngOnInit() {}

  editPlane(plane: Plane)
  {
    this.route.navigateByUrl('planes/' + plane.id);
  }

  delete(id: number) 
  {
    this.planeService.deletePlane(id).subscribe(
    record => {
      this.planes = this.planes.filter(f => f.id != id)
    });
  }

  add(aviator: Plane) 
  {
    let newFlight = Object.assign({}, aviator);
    this.planeService.createPlane(newFlight).subscribe(
      record => {
        newFlight.id = this.plane[this.planes.length-1].number + 1;
        this.planes.push(newFlight);
      });
  }
}