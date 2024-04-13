import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HowtoplayComponent} from "./howtoplay/howtoplay.component";
import {CategoriesComponent} from "./categories/categories.component";

export const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "how-to-play", component: HowtoplayComponent
  },
  {
    path: "choose-category", component: CategoriesComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];
