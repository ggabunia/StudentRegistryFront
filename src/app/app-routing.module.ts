import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {StudentEditComponent} from './students/student-edit/student-edit.component';

const routes: Routes = [
  {path: '', component: StudentsComponent},
  {path: 'edit/:id', component: StudentEditComponent},
  {path: 'create', component: StudentEditComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
