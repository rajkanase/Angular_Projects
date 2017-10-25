import { 
  Directive,
  HostListener,
  Renderer2,
  ElementRef 
  } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverDirective {

  constructor(private eleRef:ElementRef,private rend:Renderer2) { }

  @HostListener('mouseenter') bigger(){
    this.rend.setStyle(this.eleRef.nativeElement,'-webkit-transition','all .3s ease');
    this.rend.setStyle(this.eleRef.nativeElement,'-webkit-transform','translateZ(0) scale(1.20)');
  }

  @HostListener('mouseleave') smaller(){
    this.rend.setStyle(this.eleRef.nativeElement,'-webkit-transition','all .3s ease');
    this.rend.setStyle(this.eleRef.nativeElement,'-webkit-transform','translateZ(0) scale(1)');
  } 

}
