import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {
  mostrarNomes: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    this.mostrarNomes = !this.mostrarNomes;
  }

}
