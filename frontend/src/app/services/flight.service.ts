import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Flight } from '../models/flight';
import { environment } from '../urlmodules';
 
@Injectable()
export class FlightService 
{ 
    private headers: HttpHeaders;
    private url = "/api/Flight";
 
    constructor(private http: HttpClient) 
    {
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
 
    getFlight()
    {
        return this.http.get(this.url, {headers: this.headers});
    }

    public getFlightById(id: number) 
    {
        return this.http.get(this.url + '/' + id, {headers: this.headers});
    }
 
    createFlight(flight: Flight) 
    {
        return this.http.post(this.url, flight, {headers: this.headers});
    }

    updateFlight(flight: Flight) 
    {
  
        return this.http.put(this.url + '/' + flight.number, flight, {headers: this.headers});
    }

    deleteFlight(id: number) 
    {
        return this.http.delete(this.url + '/' + id, {headers: this.headers});
    }
}