import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../models/Education';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getStars(): Observable< Education []> {
    return this.http.get< Education []>
    ('https://us-central1-tfg2019-ae3f8.cloudfunctions.net/api/education', httpOptions);
  }

}
