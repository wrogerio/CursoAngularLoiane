import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {
  
  @Input() set ngElse(condition: boolean){
    if(!condition){
      this._v.createEmbeddedView(this._t)
    }
    else{
      this._v.clear();
    }
  }
  constructor(private _t : TemplateRef<any>, private _v: ViewContainerRef) { }

}
