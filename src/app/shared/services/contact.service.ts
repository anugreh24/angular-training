import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  REST_API_URL = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }

  createContact(contactData) {
    console.log(contactData);

    // Method: POST
    return this.http.post(this.REST_API_URL, contactData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));

  }




}
