import { Component } from '@angular/core';

@Component({
  selector: 'diretiva-ngif',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.scss'],
})
export class DiretivaNgIfComponent {
  cursos: string[] = ['C#', 'JavaScript', 'Node'];
  novoCurso: string = '';

  constructor() {}

  adicionarCurso() {
    if (this.novoCurso.length > 0) {
      this.cursos.push(this.novoCurso);
    }
    this.novoCurso = '';
  }

  remover(valor: any) {
    this.cursos = this.cursos.filter((x) => x !== valor);
  }
}
