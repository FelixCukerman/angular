import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Departure } from '../models/departures';
 
@Injectable()
export class DepartureService 
{ 
    private headers: HttpHeaders;
    private url = "/api/Departure";
 
    constructor(private http: HttpClient)
    {
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
 
    getDepartures()
    {
        return this.http.get(this.url, {headers: this.headers});
    }

    public getDepartureById(id: number)
    {
        return this.http.get(this.url + '/' + id, {headers: this.headers});
    }
 
    createDeparture(departure: Departure) 
    {
        return this.http.post(this.url, departure, {headers: this.headers});
    }

    updateDeparture(departure: Departure) 
    {
  
        return this.http.put(this.url + '/' + departure.id, departure, {headers: this.headers});
    }

    deleteDeparture(id: number)
    {
        return this.http.delete(this.url + '/' + id, {headers: this.headers});
    }
}