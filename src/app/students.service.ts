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

  addStudent(student: Student): Observable<any> {
    return this.http.post<Student>(this.studentUrl, student, this.httpOptions);
  }
  updateStudent(id: number, student: Student): Observable<any> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.put(url, student, this.httpOptions);
  }

  deleteStudent(student: Student | number): Observable<any> {
    const id = typeof student === 'number' ? student : student.id;
    const url = `${this.studentUrl}/${id}`;

    return this.http.delete<any>(url, this.httpOptions);
  }


  getFilteredStudents(personalNr: string, startDate: Date, endDate: Date) {
    return [];
  }
}
