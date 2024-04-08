import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

export interface TitleImageSources {
  mobile_title_src: string;
  tablet_title_src: string;
  desktop_title_src: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({required: false}) data: TitleImageSources | null = null
}
