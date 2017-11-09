import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MeuMaterialModule } from './meu-material/meu-material.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MeuMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
