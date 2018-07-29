import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Stewardess } from '../models/stewardesses';
 
@Injectable()
export class StewardessService 
{ 
    private headers: HttpHeaders;
    private url = "/api/Stewardess";
 
    constructor(private http: HttpClient) 
    {
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
 
    getStewardess()
    {
        return this.http.get(this.url, {headers: this.headers});
    }

    public getStewardessById(id: number) 
    {
        return this.http.get(this.url + '/' + id, {headers: this.headers});
    }
 
    createStewardess(stewardess: Stewardess) 
    {
        return this.http.post(this.url, stewardess, {headers: this.headers});
    }

    updateStewardess(stewardess: Stewardess) 
    {
  
        return this.http.put(this.url + '/' + stewardess.id, stewardess, {headers: this.headers});
    }

    deleteStewardess(id: number) 
    {
        return this.http.delete(this.url + '/' + id, {headers: this.headers});
    }
}