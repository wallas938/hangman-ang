import { AfterContentInit, AfterViewInit, Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitleSizes]',
  standalone: true,
})
export class TitleSizesDirective implements OnInit {
  @Input()
  dimensions: { width: string, height: string } = {
    width: '',
    height: ''
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }
  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, "width", this.dimensions.width);
    this.renderer.setStyle(this.el.nativeElement, "height", this.dimensions.height);
  }

}
