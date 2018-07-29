import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/tickets';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tickets-details',
  templateUrl: './tickets-details.component.html',
  styleUrls: ['./tickets-details.component.css']
})
export class TicketsDetailsComponent implements OnInit 
{
  public ticket: Ticket = new Ticket();

  constructor(public currentRoute: ActivatedRoute, public ticketService: TicketService, public router: Router) 
  { 
  }

  ngOnInit() 
  {
    if(this.currentRoute.snapshot.params['id'] != null)
    {
      console.log('С парамс все ок');
    }
    this.ticketService.getTicketById(this.currentRoute.snapshot.params['id']).subscribe(
      (data: Ticket) => {
        this.ticket = data;
      });
  }

  public editTickets(ticket: Ticket)
  {
    this.ticketService.updateTicket(ticket).subscribe((data: Ticket) => this.ticket = data);
  }

  onClick()
  {
    this.router.navigate(['/tickets']);
  }
}
