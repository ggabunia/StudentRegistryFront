import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../students.service';
import {Student} from '../../student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[];
  constructor(private studServ: StudentsService) { }

  ngOnInit() {
    this.studServ.getStudents().subscribe(
      students => this.students = students
    );
  }

}
