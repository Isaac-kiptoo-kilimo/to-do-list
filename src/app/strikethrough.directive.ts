import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
@HostListener('mouseenter') onMouseEnter(){
  this.highlight('yellow');
}
@HostListener('mouseleave') onMouseLeave(){
  this.highlight('');
}
//   constructor(private elem:ElementRef) {}
  
// private textDeco(action:string){
//   this.elem.nativeElement.style.textDecoration= action;
// }
private highlight(color:string){
  this.elem.nativeElement.style.backgroundColor=color;
}
constructor( private elem:ElementRef ){
  this.elem.nativeElement.style.backgroundColor=' '
}
};
