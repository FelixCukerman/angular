import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/tickets';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit 
{
  ticket: Ticket;
  tickets: Ticket[];
  tableMode: boolean;

  constructor(private ticketService: TicketService,  private route: Router) 
  { 
    ticketService.getTicket().subscribe((data: Ticket[]) => {
      this.tickets = data;
    });
    
    this.ticket = new Ticket();
    this.tableMode = true;
  }

  ngOnInit() {}

  editTicket(ticket: Ticket)
  {
    this.route.navigateByUrl('tickets/' + ticket.id);
  }

  delete(id: number) 
  {
    this.ticketService.deleteTicket(id).subscribe(
    record => {
      this.tickets = this.tickets.filter(f => f.id != id)
    });
  }

  add(ticket: Ticket) 
  {
    let newFlight = Object.assign({}, ticket);
    this.ticketService.createTicket(newFlight).subscribe(
      record => {
        newFlight.id = this.ticket[this.tickets.length-1].number + 1;
        this.tickets.push(newFlight);
      });
  }
}
