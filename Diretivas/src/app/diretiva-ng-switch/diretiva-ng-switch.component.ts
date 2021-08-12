import { Component } from '@angular/core';

@Component({
  selector: 'diretiva-ngswitch',
  templateUrl: './diretiva-ng-switch.component.html',
  styleUrls: ['./diretiva-ng-switch.component.scss'],
})
export class DiretivaNgSwitchComponent {
  aba: string = 'home'
  constructor() {}

  setAba(valor: string){
    this.aba = valor
  }
}
