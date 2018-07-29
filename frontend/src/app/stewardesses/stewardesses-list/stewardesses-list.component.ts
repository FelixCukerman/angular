import { Component, OnInit } from '@angular/core';
import { Stewardess } from '../../models/stewardesses';
import { StewardessService } from '../../services/stewardess.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stewardesses-list',
  templateUrl: './stewardesses-list.component.html',
  styleUrls: ['./stewardesses-list.component.css']
})
export class StewardessesListComponent implements OnInit 
{
  stewardess: Stewardess;
  stewardesses: Stewardess[];
  tableMode: boolean;

  constructor(private stewardessService: StewardessService,  private route: Router) 
  { 
    stewardessService.getStewardess().subscribe((data: Stewardess[]) => {
      this.stewardesses = data;
    });
    
    this.stewardess = new Stewardess();
    this.tableMode = true;
  }

  ngOnInit() {}

  editStewardess(stewardess: Stewardess)
  {
    this.route.navigateByUrl('stewardesses/' + stewardess.id);
  }

  delete(id: number) 
  {
    this.stewardessService.deleteStewardess(id).subscribe(
    record => {
      this.stewardesses = this.stewardesses.filter(f => f.id != id)
    });
  }

  add(stewardess: Stewardess) 
  {
    let newFlight = Object.assign({}, stewardess);
    this.stewardessService.createStewardess(newFlight).subscribe(
      record => {
        newFlight.id = this.stewardess[this.stewardesses.length-1].number + 1;
        this.stewardesses.push(newFlight);
      });
  }
}
