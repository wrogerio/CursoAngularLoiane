import { Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') PassandoOMouse() {
    //this._r.setStyle(this._e.nativeElement, 'background-color', 'yellow');
    this.backColor = 'yellow'
  }

  @HostListener('mouseleave') SaindoOMouse() {
    //this._r.setStyle(this._e.nativeElement, 'background-color', 'white');
    this.backColor = 'white'
  }

  @HostBinding('style.backgroundColor') backColor: string = '';

  constructor() {}
}
