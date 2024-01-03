import { Component, Output ,EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
 
 

@Component({
  selector: 'app-app-create-onomatopia',
  templateUrl: './app-create-onomatopia.component.html',
  styleUrl: './app-create-onomatopia.component.css'
})
export class AppCreateOnomatopiaComponent {
 @Output() 
 sendOnomatopiaToParent : EventEmitter<string> = new EventEmitter(); 

 newOnomatopia : string =''; 
 createOnomatopia() :void {

  if (this.newOnomatopia.trim() !== '') {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
    this.newOnomatopia = ''; // Réinitialiser le champ après l'ajout
  }
 }




}
