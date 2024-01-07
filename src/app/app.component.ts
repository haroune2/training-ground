import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private service: PokemonService) {

  }
  ngOnInit(): void {
    this.GetInfoApi();
  }
  ApiInfo: any;
  Cards :any; 

GetInfoApi(){
  this.service.getInfo().subscribe((data) => {
    console.log("teste");
    this.ApiInfo = data; 
    this.Cards = this.ApiInfo.data; 
    console.log(this.Cards);
    

  })
}

  


}
