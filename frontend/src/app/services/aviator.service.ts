import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Aviator } from '../models/aviators';
 
@Injectable()
export class AviatorService 
{ 
    private headers: HttpHeaders;
    private url = "/api/Aviators";
 
    constructor(private http: HttpClient) 
    {
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
 
    getAviators()
    {
        return this.http.get(this.url, {headers: this.headers});
    }

    public getAviatorById(id: number)
    {
        return this.http.get(this.url + '/' + id, {headers: this.headers});
    }
 
    createAviator(aviator: Aviator) 
    {
        return this.http.post(this.url, aviator, {headers: this.headers});
    }

    updateAviator(aviator: Aviator) 
    {
  
        return this.http.put(this.url + '/' + aviator.id, aviator, {headers: this.headers});
    }

    deleteAviator(id: number)
    {
        return this.http.delete(this.url + '/' + id, {headers: this.headers});
    }
}