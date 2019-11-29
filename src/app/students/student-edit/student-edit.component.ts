import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../students.service';
import {Student} from '../../student';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {GendersService} from '../../genders.service';
import {Gender} from '../../gender';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  genders: Gender[];
  student: Student = {
    id: -1,
    firstName: '',
    lastName: '',
    doB: null,
    pN: '',
    genderName: '',
    genderId: 1
  };
  id: number;
  editMode = false;
  showErrors = false;
  validationErrors: string[];
  title = 'სტუდენტის დამატება';
  constructor(private studServ: StudentsService,
              private genderServ: GendersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.genderServ.getGenders()
      .subscribe(genders => this.genders = genders);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        if (this.editMode) {
          this.title = 'სტუდენტის რედაქტირება';
          this.studServ.getStudent(this.id)
            .subscribe(student => this.student = student);
        }
      }
    );
  }

  onSubmit() {
    this.student.genderId = +this.student.genderId;
    if (this.editMode) {
      this.studServ.updateStudent(this.id, this.student).subscribe(
        (data) => {
          if (data.statusCode === 400) {
            if (data.errorsList !== null) {
              this.validationErrors = data.errorsList;
              this.showErrors = true;
            }
          }
        }
      );
    } else {
      this.studServ.addStudent(this.student).subscribe(
        (data) => {
          if (data.statusCode === 400) {
            if (data.errorsList !== null) {
              this.validationErrors = data.errorsList;
              this.showErrors = true;
            }
          } else {
            this.router.navigate(['/']);
          }

        }
      );
    }
  }
}
