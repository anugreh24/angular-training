import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  REST_API_URL = 'http://localhost:3000/events';

  constructor(private http: HttpClient) { }

  createEvent(eventData){
    console.log(eventData);
    return this.http.post(this.REST_API_URL, eventData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  getEvents(): Observable<any>{
    return this.http.get(this.REST_API_URL)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  getEvent(id){
    console.log(id);
    return this.http.get(this.REST_API_URL +  '/' + id)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }




}
