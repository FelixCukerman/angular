import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { TypePlane } from '../models/typesPlane';
import { environment } from '../urlmodules';
 
@Injectable()
export class TypePlaneService 
{ 
    private headers: HttpHeaders;
    private url = "/api/TypePlane";
 
    constructor(private http: HttpClient) 
    {
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
 
    getTypePlane()
    {
        return this.http.get(this.url, {headers: this.headers});
    }

    public getTypePlaneById(id: number) 
    {
        return this.http.get(this.url + '/' + id, {headers: this.headers});
    }
 
    createTypePlane(typePlane: TypePlane) 
    {
        return this.http.post(this.url, typePlane, {headers: this.headers});
    }

    updateTypePlane(typePlane: TypePlane) 
    {
  
        return this.http.put(this.url + '/' + typePlane.id, typePlane, {headers: this.headers});
    }

    deleteTypePlane(id: number) 
    {
        return this.http.delete(this.url + '/' + id, {headers: this.headers});
    }
}