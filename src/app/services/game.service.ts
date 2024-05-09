import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameMenuStatusNotifier!: Subject<boolean>;

  constructor() { }

  openMenu() {
    this.gameMenuStatusNotifier = new Subject();
    this.gameMenuStatusNotifier.next(true);
    return this.gameMenuStatusNotifier?.asObservable();
  }
  closeMenu() {
    this.gameMenuStatusNotifier.next(true);
  }
}
