import {AfterViewInit, Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {TitleSizesDirective} from "../../directives/title-sizes.directive";

export interface TitleImageSources {
  mobile_title: {
    src: string;
    sizes: {
      width: string;
      height: string;
    }
  };
  tablet_title: {
    src: string;
    sizes: {
      width: string;
      height: string;
    }
  };
  desktop_title: {
    src: string;
    sizes: {
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
