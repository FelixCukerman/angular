import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Crew } from '../models/crews';
 
@Injectable()
export class CrewService 
{ 
    private headers: HttpHeaders;
    private url = "/api/Crew";
 
    constructor(private http: HttpClient) 
    {
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
 
    getCrews()
    {
        return this.http.get(this.url, {headers: this.headers});
    }

    public getCrewById(id: number)
    {
        return this.http.get(this.url + '/' + id, {headers: this.headers});
    }
 
    createCrew(crew: Crew) 
    {
        return this.http.post(this.url, crew, {headers: this.headers});
    }

    updateCrew(crew: Crew) 
    {
        return this.http.put(this.url + '/' + crew.id, crew, {headers: this.headers});
    }

    deleteCrew(id: number)
    {
        return this.http.delete(this.url + '/' + id, {headers: this.headers});
    }
}