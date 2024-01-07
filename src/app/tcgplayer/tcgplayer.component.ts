import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tcgplayer',
  templateUrl: './tcgplayer.component.html',
  styleUrl: './tcgplayer.component.css'
})
export class TcgplayerComponent {

  @Input() tcgplayer: any; 
}
