import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { StudentsComponent } from './students/students.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsSearchComponent } from './students/students-search/students-search.component';
import { HeaderComponent } from './header/header.component';
import { StudentEditComponent } from './students/student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsListComponent,
    StudentsSearchComponent,
    HeaderComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
