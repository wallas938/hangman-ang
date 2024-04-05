import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {routes} from "./app.routes";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'hangman';
  gradientBG: boolean = false

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const path = event.url;
        this.gradientBG = path != "/home";
      }
    })
  }


}
