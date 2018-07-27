import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Ticket } from '../models/tickets';
 
@Injectable()
export class TicketService 
{ 
    private headers: HttpHeaders;
    private url = "/api/Ticket";
 
    constructor(private http: HttpClient) 
    {
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
 
    getTicket()
    {
        return this.http.get(this.url, {headers: this.headers});
    }

    public getTicketById(id: number) 
    {
        return this.http.get(this.url + '/' + id, {headers: this.headers});
    }
 
    createTicket(ticket: Ticket) 
    {
        return this.http.post(this.url, ticket, {headers: this.headers});
    }

    updateTicket(ticket: Ticket) 
    {
  
        return this.http.put(this.url + '/' + ticket.id, ticket, {headers: this.headers});
    }

    deleteTicket(id: number) 
    {
        return this.http.delete(this.url + '/' + id, {headers: this.headers});
    }
}