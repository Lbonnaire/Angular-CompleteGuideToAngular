import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string='transparent';
  @Input('appBetterHighlight') highlightColor:string='blue';
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue')
    	this.backgroundColor= this.defaultColor;
  }


  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor= this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
      this.backgroundColor=this.defaultColor;

  }
}

