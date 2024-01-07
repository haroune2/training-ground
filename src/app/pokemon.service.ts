import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl  : string =  "https://api.pokemontcg.io/v2/cards/"; 
  
  constructor(private http : HttpClient) { }

  getInfo (){
    return this.http.get(this.apiUrl); 
  }
}
