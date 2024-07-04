import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';

import {OnInit } from '@angular/core';
import {
 
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
 
} from 'angular-calendar';
 



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  refresh: Subject<any> = new Subject();
   

  constructor( ) {}

  ngOnInit(): void {
 
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.viewDate = new Date();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log(action, event);
  }

 
}
