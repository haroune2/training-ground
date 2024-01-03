import { Component } from '@angular/core';
 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 items: string[] = ['item01','item02','item03','item04','item05','item06','item07']; 

 addItem(newItem: string){
  this.items.push(newItem); 
 }

 onomatopoeiaList : string [] =['onomatopoeia1','onomatopoeia6','onomatopoeia5','onomatopoeia4']; 
 onReceiveNewOnomatopia(NewOnomatopia : string) : void {
  this.onomatopoeiaList.push(NewOnomatopia);
 }
}
