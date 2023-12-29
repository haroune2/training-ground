import { Component } from '@angular/core';
import { Order } from './models/order.models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  model: Order = new Order("", 0, new Date(), "");
  
  onSubmit() :void {
    console.log(this.model);
  }

  onSubmittest(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }


  isSpecial: boolean = true;

  phrases: string[] = [
    'Bonjour tout le monde',
    'Bienvenue sur Angular',
    'Au revoir'
  ];
  containsBonjour(phrase: string): boolean {
    return phrase.toLowerCase().includes('bonjour');
  }
}
