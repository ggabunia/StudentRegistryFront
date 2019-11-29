import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-students-search',
  templateUrl: './students-search.component.html',
  styleUrls: ['./students-search.component.css']
})
export class StudentsSearchComponent implements OnInit {

  @Output() clearEmiter = new EventEmitter<any>();
  @Output() filterEmitter = new EventEmitter<{personalNr: string, startDate: Date}>();
  personalNr = '';
  startDate = '';
  constructor() { }

  ngOnInit() {
  }

  onFilterClear() {
    this.personalNr = ''
    this.clearEmiter.emit('clear form');
  }

  onFilter() {
    let stDate = null;
    if (this.startDate !== null && this.startDate !== '') {
      stDate = new Date(this.startDate);
    }

    this.filterEmitter.emit({personalNr: this.personalNr, startDate: stDate});
  }
}
