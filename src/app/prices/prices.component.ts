import { Component, Input } from '@angular/core';
 

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {

  @Input() holofoil: any | undefined;

}
