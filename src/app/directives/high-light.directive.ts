import { Directive, ElementRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
   }
}
