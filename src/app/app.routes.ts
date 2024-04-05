import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HowtoplayComponent} from "./howtoplay/howtoplay.component";

export const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "how-to-play", component: HowtoplayComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];
