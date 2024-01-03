import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit{
  ngOnInit(): void {
    this.sendDataToParent(); 
  }

  @Output() ItemManager: EventEmitter<string> = new EventEmitter(); 
  
  sendDataToParent(){
    this.ItemManager.emit('new items sent from child'); 
  }
}
