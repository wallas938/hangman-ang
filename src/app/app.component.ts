import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {GameService} from "./services/game.service";
import {GameMenuComponent} from "./components/dynanmics/game-menu/game-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink,
    RouterLinkActive, NgOptimizedImage,
    NgClass, GameMenuComponent],
  providers: [GameService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'hangman';
  gradientBG: boolean = false;

  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const path = event.url;
        this.gradientBG = path != "/home";
      }
    });
  }


}
