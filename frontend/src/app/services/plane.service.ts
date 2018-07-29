import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Plane } from '../models/planes';
import { environment } from '../urlmodules';
 
@Injectable()
export class PlaneService 
{ 
    private headers: HttpHeaders;
    private url = environment.API_URL + "/api/Plane";
 
    constructor(private http: HttpClient) 
    {
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }
 
    getPlane()
    {
        return this.http.get(this.url, {headers: this.headers});
    }

    public getPlaneById(id: number) 
    {
        return this.http.get(this.url + '/' + id, {headers: this.headers});
    }
 
    createPlane(plane: Plane) 
    {
        return this.http.post(this.url, plane, {headers: this.headers});
    }

    updatePlane(plane: Plane) 
    {
  
        return this.http.put(this.url + '/' + plane.id, plane, {headers: this.headers});
    }

    deletePlane(id: number) 
    {
        return this.http.delete(this.url + '/' + id, {headers: this.headers});
    }
}