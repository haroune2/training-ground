import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { AppComponent } from './app.component';  // Assurez-vous que le chemin d'accès au composant est correct
 

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
