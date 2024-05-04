import {Component, computed} from '@angular/core';
import {CardComponent} from "../howtoplay/card/card.component";
import {HeaderComponent, TitleImageSources} from "../layout/header/header.component";
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-categories',
    standalone: true,
  imports: [
    CardComponent,
    HeaderComponent,
    RouterLink,
    NgClass
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
            dimensions: {
                width: "245",
                height: "58"
            }
        },
        tablet_title: {
            src: "assets/images/category-title_t.png",
            dimensions: {
                width: "451",
                height: "125"
            }
        },
        desktop_title: {
            src: "assets/images/category-title_d.png",
            dimensions: {
                width: "590",
                height: "163"
            }
        },
    }

    constructor() {
    }
}
