import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    // _elementRef.nativeElement.style.backgroundColor = 'yellow';
    // _elementRef.nativeElement.style.padding = '10px'
    this._renderer.setStyle(this._elementRef.nativeElement, "background-color", "yellow");
    this._renderer.setStyle(this._elementRef.nativeElement, "padding", "10px");
    console.log(_renderer)
  }

}
