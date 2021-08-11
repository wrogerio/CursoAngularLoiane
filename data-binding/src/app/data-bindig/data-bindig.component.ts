import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindig',
  templateUrl: './data-bindig.component.html',
  styleUrls: ['./data-bindig.component.scss'],
})
export class DataBindigComponent implements OnInit {
  url: string = 'https://github.com/wrogerio?tab=repositories';
  cursoAngular: boolean = true;
  imgUrl: string = 'https://picsum.photos/400/200';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  logImage() {
    console.log(`log registrado em ${new Date().toLocaleString()}`);
  }

  constructor() {}

  ngOnInit(): void {}
}
