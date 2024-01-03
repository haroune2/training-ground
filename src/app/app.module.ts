import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importez FormsModule depuis '@angular/forms'

import { BrowserModule } from '@angular/platform-browser';
 import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AppCreateOnomatopiaComponent } from './app-create-onomatopia/app-create-onomatopia.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';  // Assurez-vous que le chemin d'accès au composant est correct
 

@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [AppComponent, ChildComponent, AppCreateOnomatopiaComponent, CreateOnomatopiaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
