import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoImput') campoValorInput?: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  decrementa() {
    if (this.valor > 0) {
      this.valor--;
      this.mudouValor.emit({ novoValor: this.valor });
    }
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
