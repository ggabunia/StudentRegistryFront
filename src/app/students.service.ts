import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private studentUrl = 'https://localhost:44312/api/students';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }
  getStudent(id: number): Observable<Student> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.get<Student>(url);
  }




}
