import {AfterViewInit, Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {TitleSizesDirective} from "../../directives/title-sizes.directive";

export interface TitleImageSources {
  mobile_title: {
    src: string;
    dimensions: {
      width: string;
      height: string;
    }
  };
  tablet_title: {
    src: string;
    dimensions: {
      width: string;
      height: string;
    }
  };
  desktop_title: {
    src: string;
    dimensions: {
      width: string;
      height: string;
    }
  };
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    TitleSizesDirective,
    NgStyle,
  ],
  inputs: ["appTitleSizes"],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input()
  value!: TitleImageSources;

  constructor() {
  }
}
