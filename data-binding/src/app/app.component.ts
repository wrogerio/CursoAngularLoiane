import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'data-binding';
  valor: number = 0;
  deletar: boolean = true;

  incrementa() {
    this.valor++;
  }

  destruir() {
    this.deletar = !this.deletar;
  }
}
