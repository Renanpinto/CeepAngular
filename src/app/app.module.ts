import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SincronizarComponent } from './sincronizar/sincronizar.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FormNovoCartaoComponent } from './components/form-novo-cartao/form-novo-cartao.component';
import { MuralComponent } from './components/mural/mural.component';
import { CartoesComponent } from './components/cartoes/cartoes.component';


@NgModule({
  declarations: [
    AppComponent,
    SincronizarComponent,
    CabecalhoComponent,
    FormNovoCartaoComponent,
    MuralComponent,
    CartoesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
