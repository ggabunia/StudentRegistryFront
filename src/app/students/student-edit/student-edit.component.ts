import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../students.service';
import {Student} from '../../student';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: Student;
  id: number;
  editMode = false;
  constructor(private studServ: StudentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        if (this.editMode) {
          this.studServ.getStudent(this.id)
            .subscribe(student => this.student = student);
        }
      }
    );
  }

}
