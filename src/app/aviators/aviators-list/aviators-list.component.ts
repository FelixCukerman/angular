import { Component, OnInit } from '@angular/core';
import { AviatorService } from '../../services/aviator.service';
import { Aviator } from '../../models/aviators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aviators-list',
  templateUrl: './aviators-list.component.html',
  styleUrls: ['./aviators-list.component.css'],
  providers: [AviatorService]
})
export class AviatorsListComponent implements OnInit 
{

  aviator: Aviator;
  aviators: Aviator[];
  tableMode: boolean;

  constructor(private aviatorService: AviatorService,  private route: Router) 
  { 
    aviatorService.getAviators().subscribe((data: Aviator[]) => {
      this.aviators = data;
    });
    
    this.aviator = new Aviator();
    this.tableMode = true;
  }

  ngOnInit() {}

  editAviator(aviator: Aviator)
  {
    this.route.navigateByUrl('aviators/' + aviator.id);
  }

  delete(id: number) 
  {
    this.aviatorService.deleteAviator(id).subscribe(
    record => {
      this.aviators = this.aviators.filter(f => f.id != id)
    });
  }

  add(aviator: Aviator) 
  {
    let newFlight = Object.assign({}, aviator);
    this.aviatorService.createAviator(newFlight).subscribe(
      record => {
        newFlight.id = this.aviator[this.aviators.length-1].number + 1;
        this.aviators.push(newFlight);
      });
  }

}