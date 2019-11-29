import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from './student';
import {Gender} from './gender';

@Injectable({
  providedIn: 'root'
})
export class GendersService {

  genderUrl = 'https://localhost:44312/api/genders';
  constructor(private http: HttpClient) { }

  getGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(this.genderUrl);
  }
}
