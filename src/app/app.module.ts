import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { AppComponent } from './app.component';  // Assurez-vous que le chemin d'accès au composant est correct
import { HttpClientModule } from '@angular/common/http';
import { TcgplayerComponent } from './tcgplayer/tcgplayer.component';
import { PricesComponent } from './prices/prices.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router'; 
import { AppRoutingModule, routes } from './app-routing.module';
 

@NgModule({
  imports: [BrowserModule,HttpClientModule,AppRoutingModule],
  declarations: [AppComponent, TcgplayerComponent, PricesComponent, ContactComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
