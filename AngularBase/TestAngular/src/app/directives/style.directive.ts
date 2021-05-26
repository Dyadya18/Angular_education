import {Directive, ElementRef, HostBinding, HostListener, Input, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})




export class StyleDirective {
  @Input('appStyle') color = 'blue';
  // @ts-ignore
  @Input() dStyle: {fontWeight?: string, border?: string, borderRadius?: string};
  // @ts-ignore
  // @ts-ignore
  constructor(protected el: ElementRef, protected r: Renderer2) {
  }

  @HostBinding('style.background') background = null;
  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event.target']) onClick(event: Element){
    console.log(event);
  }

  // tslint:disable-next-line:typedef
  @HostListener('mouseenter') onEnter(){
    // @ts-ignore
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyle.fontWeight);
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius);
  }
  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') onLeave(){
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
  }
}
