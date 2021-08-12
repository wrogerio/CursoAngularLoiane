import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') PassandoOMouse() {
    this.backColor = this.highLightColor
  }

  @HostListener('mouseleave') SaindoOMouse() {
    this.backColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backColor: string = 'blue';

  @Input() defaultColor: string = 'white';
  @Input() highLightColor: string = 'yellow';

  constructor() { }

}
