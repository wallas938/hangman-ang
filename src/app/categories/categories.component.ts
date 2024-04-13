import { Component } from '@angular/core';
import {CardComponent} from "../howtoplay/card/card.component";
import {HeaderComponent, TitleImageSources} from "../layout/header/header.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CardComponent,
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categoryNames: string[] = [
    "MOVIES",
    "TV SHOWS",
    "COUNTRIES",
    "CAPITAL CITIES",
    "ANIMALS",
    "SPORTS"
  ]
  categoryTitles: TitleImageSources = {
    mobile_title: {
      src: "assets/images/category-title_m.png",
      sizes: {
        width: "245px",
        height: "58px"
      }
    },
    tablet_title: {
      src: "assets/images/category-title_t.png",
      sizes: {
        width: "451px",
        height: "125px"
      }
    },
    desktop_title: {
      src: "assets/images/category-title_d.png",
      sizes: {
        width: "590px",
        height: "163px"
      }
    },
  }
}
