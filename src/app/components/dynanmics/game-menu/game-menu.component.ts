import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  signal,
  SimpleChanges,
  WritableSignal
} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {GAME_MENU_STATE, GAMES_STATES} from "../../../models/AppModels";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-game-menu',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    RouterLink
  ],
  templateUrl: './game-menu.component.html',
  styleUrl: './game-menu.component.scss'
})
export class GameMenuComponent implements OnInit, OnChanges {



  @Input({ required: true }) gameState!: GAMES_STATES;
  @Output() closeMenuEvent: EventEmitter<GAME_MENU_STATE> = new EventEmitter();

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

  closeMenu() {
    this.closeMenuEvent.next(GAME_MENU_STATE.CLOSED)
  }
}
