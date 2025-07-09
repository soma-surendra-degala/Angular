import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone:true,
  host: {
    '(click)':'applyLogic()'
  }
})
export class Highlight {

  @Input() number=25;
  @Input() divisibleBy=1;

  private el:ElementRef | undefined;
  constructor(el:ElementRef) { 
    this.el=el;
  }

  applyLogic(){
    if(this.number % this.divisibleBy === 0){
      if (this.el){
      this.el.nativeElement.style.color='green';
    }

    }else{
        if (this.el){
      this.el.nativeElement.style.color='red';

    }
  }
}
}
