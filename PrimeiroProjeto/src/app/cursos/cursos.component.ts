import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  linkPortal: string = ''
  cursos: any[] = []

  constructor(private cursosService: CursosService) { 
    this.linkPortal = 'https://github.com/wrogerio?tab=repositories'
    this.cursos = cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
