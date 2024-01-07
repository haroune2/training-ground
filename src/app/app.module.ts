import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { AppComponent } from './app.component';  // Assurez-vous que le chemin d'accès au composant est correct
import { HttpClientModule } from '@angular/common/http';
import { TcgplayerComponent } from './tcgplayer/tcgplayer.component';
import { PricesComponent } from './prices/prices.component';
 

@NgModule({
  imports: [BrowserModule,HttpClientModule],
  declarations: [AppComponent, TcgplayerComponent, PricesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
