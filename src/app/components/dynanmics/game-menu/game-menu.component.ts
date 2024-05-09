import {Component, Input, OnChanges, OnInit, signal, SimpleChanges, WritableSignal} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {GAMES_STATES} from "../../../game/game.component";

@Component({
  selector: 'app-game-menu',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './game-menu.component.html',
  styleUrl: './game-menu.component.scss'
})
export class GameMenuComponent implements OnInit, OnChanges {

  @Input({ required: true }) gameState!: GAMES_STATES;

  menuMessageSrc:  WritableSignal<string> = signal("assets/images/paused.png");

  ngOnInit(): void {
    this.updateMessageSrc()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateMessageSrc();
  }

  updateMessageSrc() {
    if(this.gameState === GAMES_STATES.PAUSED) {
      this.menuMessageSrc.set("assets/images/paused.png");
      return;
    } else if(this.gameState === GAMES_STATES.WIN) {
      this.menuMessageSrc.set("assets/images/you-win.png");
      return;
    }
    this.menuMessageSrc.set("assets/images/you-lose.png");
  }

  protected readonly GAMES_STATES = GAMES_STATES;
}
