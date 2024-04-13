import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appTitleSizes]',
  standalone: true
})
export class TitleSizesDirective {
  @Input()
  sizes: { width: string, height: string } = {
    width: '',
    height: ''
  }
  @Input() appTitleSizes!: { width: string; height: string };
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.width = this.sizes.width;
    this.el.nativeElement.style.height = this.sizes.height;
  }

}
