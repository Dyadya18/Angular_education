import {Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appVisibility]'
})

export class VisibilityDirective {

  // @ts-ignore
  el: HTMLElement;
  // @ts-ignore
  text: string;
@HostListener('mouseenter') onEnter(){
  this.el = this.r.createElement('div');
  this.text = this.r.createText('Some text for my tooltip');
  this.r.appendChild(this.el, this.text);
  this.r.addClass(this.el, 'wrap');
  this.r.appendChild(this.elementRef.nativeElement, this.el);
}
@HostListener('mouseleave') onLeave(){
  this.r.removeChild(this.elementRef.nativeElement, this.el);
}

constructor(private elementRef: ElementRef, private r: Renderer2) {}
}
