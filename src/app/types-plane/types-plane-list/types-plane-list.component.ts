import { Component, OnInit } from '@angular/core';
import { TypePlane } from '../../models/typesPlane';
import { TypePlaneService } from '../../services/typesPlane.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-types-plane-list',
  templateUrl: './types-plane-list.component.html',
  styleUrls: ['./types-plane-list.component.css']
})
export class TypesPlaneListComponent implements OnInit 
{
  typePlane: TypePlane;
  typesPlane: TypePlane[];
  tableMode: boolean;

  constructor(private typePlaneService: TypePlaneService,  private route: Router) 
  { 
    typePlaneService.getTypePlane().subscribe((data: TypePlane[]) => {
      this.typesPlane = data;
    });
    
    this.typePlane = new TypePlane();
    this.tableMode = true;
  }

  ngOnInit() {}

  editTypesPlane(typePlane: TypePlane)
  {
    this.route.navigateByUrl('typesplane/' + typePlane.id);
  }

  delete(id: number) 
  {
    this.typePlaneService.deleteTypePlane(id).subscribe(
    record => {
      this.typesPlane = this.typesPlane.filter(f => f.id != id)
    });
  }

  add(typesPlane: TypePlane) 
  {
    let newFlight = Object.assign({}, typesPlane);
    this.typePlaneService.createTypePlane(newFlight).subscribe(
      record => {
        newFlight.id = this.typePlane[this.typesPlane.length-1].number + 1;
        this.typesPlane.push(newFlight);
      });
  }
}
