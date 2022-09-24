import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform/browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabelaModule } from './tabela/tabela.module';

@NgModule({
  imports: [BrowserModule, FormsModule, TabelaModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }