import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../students.service';
import {Student} from '../../student';
import {type} from 'os';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[] = [];
  page = 1;
  pageSize = 5;
  constructor(private studServ: StudentsService) { }

  ngOnInit() {
    this.studServ.getStudents().subscribe(
      students => {
        this.students = students;
      }
    );
  }

  onStudentDelete(id: number) {
    const confirmed = confirm('ნამდვილად გინდა ამ სტუდენტის წაშლა?');
    if (confirmed) {
      this.studServ.deleteStudent(id)
        .subscribe(
          () => {
            const index = this.students.findIndex(student => student.id === id);
            this.students.splice(index, 1);
          }
        );
    }
  }

  onClearFilter($event: any) {
    this.studServ.getStudents().subscribe(
      students => {
        this.students = students;
      }
    );
  }

  onFilter(searchValues: {personalNr: string, startDate: Date, endDate: Date}) {
    this.studServ.getFilteredStudents(searchValues.personalNr, searchValues.startDate, searchValues.endDate).subscribe(
      students => {
        this.students = students;
      }
    );
  }
}
