import { Component, OnInit } from '@angular/core';
import { MuralComponent } from '../mural/mural.component';
import * as Pubsub from 'pubsub-js';

@Component({
  selector: 'app-form-novo-cartao',
  templateUrl: './form-novo-cartao.component.html',
  styleUrls: ['./form-novo-cartao.component.css']
})
export class FormNovoCartaoComponent implements OnInit {

  constructor() {}
   

  ngOnInit() {
  }

  salvar(event){
      event.preventDefault();
      console.log('Deve criar cartões')
  
      Pubsub.publish('NOVO_CARTAO', { conteudo: 'Bagulhos Novo 1' })
    
  }

}
