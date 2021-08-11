import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-bindig.component.html',
  styleUrls: ['./data-bindig.component.scss'],
})
export class DataBindigComponent implements OnInit {
  url: string = 'https://github.com/wrogerio?tab=repositories';
  cursoAngular: boolean = true;
  imgUrl: string = 'https://picsum.photos/400/200';
  valorString = '';
  valorSalvo = '';
  valorBlur = '';
  aplicarClasse = '';
  isMouseOver: Boolean = false;
  nome = '';
  pessoa = {
    nome: 'Wellington',
    idade: 39,
  };
  @Input() nomesDoCurso = 'Angular';
  valorInicial = 0;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  logClick() {
    console.log(`click registrado em ${new Date().toLocaleString()}`);
  }

  onKeyUp(event: any) {
    this.valorString = event;
  }

  salvar(event: any) {
    this.valorSalvo = event;
    this.valorString = '';
  }

  salverBlur(event: any) {
    this.valorBlur = event;
  }

  aplicar() {
    this.aplicarClasse = 'text-uppercase';
    this.isMouseOver = true;
  }

  voltar() {
    this.aplicarClasse = 'text-lowercase';
    this.isMouseOver = false;
  }

  onMudouValor(event: any){
    console.log(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
