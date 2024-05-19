import {Component, computed, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {
  AsyncPipe,
  NgClass,
  NgIf,
  NgOptimizedImage,
  NgStyle,
  NgTemplateOutlet,
  TitleCasePipe,
  UpperCasePipe
} from "@angular/common";
import {GameMenuComponent} from "../components/dynanmics/game-menu/game-menu.component";
import {GameService} from "../services/game.service";
import {CATEGORIES, GAME_MENU_STATE, GameData, GAMES_STATES, KeyBoardLetter, MysteryWord} from "../models/AppModels";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    AsyncPipe,
    TitleCasePipe,
    UpperCasePipe,
    RouterLink,
    NgStyle,
    NgIf,
    NgClass,
    NgOptimizedImage,
    GameMenuComponent,
    NgTemplateOutlet,
  ],
  providers: [GameService],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  wordsCount: WritableSignal<number> = signal<number>(0);
  lettersCount: WritableSignal<number> = signal<number>(0);
  attemptsLeft: WritableSignal<number> = signal<number>(0);
  gameMenuState: GAME_MENU_STATE = GAME_MENU_STATE.CLOSED;
  data: GameData = {
    "categories": {
      "Movies": [
        {"name": "The Godfather", "selected": false},
        {"name": "Titanic", "selected": false},
        {"name": "Inception", "selected": false},
        {"name": "Gladiator", "selected": false},
        {"name": "Casablanca", "selected": false},
        {"name": "Psycho", "selected": false},
        {"name": "Avatar", "selected": false},
        {"name": "Jaws", "selected": false},
        {"name": "Frozen", "selected": false},
        {"name": "The Matrix", "selected": false},
        {"name": "Goodfellas", "selected": false},
        {"name": "Braveheart", "selected": false},
        {"name": "Fight Club", "selected": false},
        {"name": "Pulp Fiction", "selected": false},
        {"name": "Forrest Gump", "selected": false},
        {"name": "The Lion King", "selected": false},
        {"name": "Back to the Future", "selected": false},
        {"name": "Jurassic Park", "selected": false},
        {"name": "Blade Runner", "selected": false},
        {"name": "Star Wars", "selected": false},
        {"name": "The Dark Knight", "selected": false},
        {"name": "The Big Lebowski", "selected": false},
        {"name": "The Wizard of Oz", "selected": false},
        {"name": "Schindler's List", "selected": false},
        {"name": "Toy Story", "selected": false},
        {"name": "The Silence of the Lambs", "selected": false},
        {"name": "Alien", "selected": false},
        {"name": "Interstellar", "selected": false},
        {"name": "Raiders of the Lost Ark", "selected": false},
        {"name": "La La Land", "selected": false}
      ],
      "TV Shows": [
        {"name": "Breaking Bad", "selected": false},
        {"name": "South Park", "selected": false},
        {"name": "Game of Thrones", "selected": false},
        {"name": "Stranger Things", "selected": false},
        {"name": "The Sopranos", "selected": false},
        {"name": "Friends", "selected": false},
        {"name": "The Office", "selected": false},
        {"name": "Sherlock", "selected": false},
        {"name": "Black Mirror", "selected": false},
        {"name": "The Crown", "selected": false},
        {"name": "Westworld", "selected": false},
        {"name": "Better Call Saul", "selected": false},
        {"name": "Orange Is the New Black", "selected": false},
        {"name": "The Simpsons", "selected": false},
        {"name": "Arrested Development", "selected": false},
        {"name": "Succession", "selected": false},
        {"name": "Fargo", "selected": false},
        {"name": "Mad Men", "selected": false},
        {"name": "The West Wing", "selected": false},
        {"name": "Dexter", "selected": false},
        {"name": "Rick and Morty", "selected": false},
        {"name": "Lost", "selected": false},
        {"name": "Doctor Who", "selected": false},
        {"name": "The Walking Dead", "selected": false},
        {"name": "Peaky Blinders", "selected": false},
        {"name": "Buffy the Vampire Slayer", "selected": false},
        {"name": "The Big Bang Theory", "selected": false},
        {"name": "Curb Your Enthusiasm", "selected": false},
        {"name": "Ted Lasso", "selected": false},
        {"name": "True Detective", "selected": false}
      ],
      "Countries": [
        {"name": "Australia", "selected": false},
        {"name": "Brazil", "selected": false},
        {"name": "Canada", "selected": false},
        {"name": "Denmark", "selected": false},
        {"name": "Egypt", "selected": false},
        {"name": "France", "selected": false},
        {"name": "Germany", "selected": false},
        {"name": "Hungary", "selected": false},
        {"name": "India", "selected": false},
        {"name": "Japan", "selected": false},
        {"name": "Kenya", "selected": false},
        {"name": "Luxembourg", "selected": false},
        {"name": "Mexico", "selected": false},
        {"name": "Netherlands", "selected": false},
        {"name": "Oman", "selected": false},
        {"name": "Peru", "selected": false},
        {"name": "Qatar", "selected": false},
        {"name": "Russia", "selected": false},
        {"name": "Spain", "selected": false},
        {"name": "Thailand", "selected": false},
        {"name": "United Kingdom", "selected": false},
        {"name": "Vietnam", "selected": false},
        {"name": "Italy", "selected": false},
        {"name": "United States", "selected": false},
        {"name": "China", "selected": false},
        {"name": "South Africa", "selected": false},
        {"name": "New Zealand", "selected": false},
        {"name": "Argentina", "selected": false},
        {"name": "Belgium", "selected": false},
        {"name": "Chile", "selected": false}
      ],
      "Capital Cities": [
        {"name": "Tokyo", "selected": false},
        {"name": "Paris", "selected": false},
        {"name": "London", "selected": false},
        {"name": "Kuala Lumpur", "selected": false},
        {"name": "Berlin", "selected": false},
        {"name": "Ottawa", "selected": false},
        {"name": "Canberra", "selected": false},
        {"name": "Moscow", "selected": false},
        {"name": "Beijing", "selected": false},
        {"name": "New Delhi", "selected": false},
        {"name": "Copenhagen", "selected": false},
        {"name": "Cairo", "selected": false},
        {"name": "Madrid", "selected": false},
        {"name": "Rome", "selected": false},
        {"name": "Buenos Aires", "selected": false},
        {"name": "Bangkok", "selected": false},
        {"name": "Vienna", "selected": false},
        {"name": "Seoul", "selected": false},
        {"name": "Jakarta", "selected": false},
        {"name": "Lisbon", "selected": false},
        {"name": "Riyadh", "selected": false},
        {"name": "Helsinki", "selected": false},
        {"name": "Oslo", "selected": false},
        {"name": "Stockholm", "selected": false},
        {"name": "Athens", "selected": false},
        {"name": "Dublin", "selected": false},
        {"name": "Prague", "selected": false},
        {"name": "Budapest", "selected": false},
        {"name": "Warsaw", "selected": false},
        {"name": "Amsterdam", "selected": false}
      ],
      "Animals": [
        {"name": "Elephant", "selected": false},
        {"name": "Lion", "selected": false},
        {"name": "Giraffe", "selected": false},
        {"name": "Penguin", "selected": false},
        {"name": "Dolphin", "selected": false},
        {"name": "Tiger", "selected": false},
        {"name": "Kangaroo", "selected": false},
        {"name": "Panda", "selected": false},
        {"name": "Zebra", "selected": false},
        {"name": "Polar Bear", "selected": false},
        {"name": "Cheetah", "selected": false},
        {"name": "Rhino", "selected": false},
        {"name": "Buffalo", "selected": false},
        {"name": "Koala", "selected": false},
        {"name": "Gorilla", "selected": false},
        {"name": "Chimpanzee", "selected": false},
        {"name": "Crocodile", "selected": false},
        {"name": "Flamingo", "selected": false},
        {"name": "Peacock", "selected": false},
        {"name": "Jaguar", "selected": false},
        {"name": "Leopard", "selected": false},
        {"name": "Wolf", "selected": false},
        {"name": "Fox", "selected": false},
        {"name": "Bald Eagle", "selected": false},
        {"name": "Owl", "selected": false},
        {"name": "Frog", "selected": false},
        {"name": "Shark", "selected": false},
        {"name": "Octopus", "selected": false},
        {"name": "Turtle", "selected": false},
        {"name": "Snake", "selected": false}
      ],
      "Sports": [
        {"name": "Soccer", "selected": false},
        {"name": "Basketball", "selected": false},
        {"name": "Tennis", "selected": false},
        {"name": "Baseball", "selected": false},
        {"name": "Rock Climbing", "selected": false},
        {"name": "Swimming", "selected": false},
        {"name": "Volleyball", "selected": false},
        {"name": "Table Tennis", "selected": false},
        {"name": "Badminton", "selected": false},
        {"name": "Rugby", "selected": false},
        {"name": "Cricket", "selected": false},
        {"name": "Hockey", "selected": false},
        {"name": "Boxing", "selected": false},
        {"name": "Martial Arts", "selected": false},
        {"name": "Fencing", "selected": false},
        {"name": "Archery", "selected": false},
        {"name": "Skiing", "selected": false},
        {"name": "Bobsleigh", "selected": false},
        {"name": "Cycling", "selected": false},
        {"name": "Curling", "selected": false},
        {"name": "Surfing", "selected": false},
        {"name": "Diving", "selected": false},
        {"name": "Gymnastics", "selected": false},
        {"name": "Athletics", "selected": false},
        {"name": "Rowing", "selected": false},
        {"name": "Sailing", "selected": false},
        {"name": "Canoeing", "selected": false},
        {"name": "Ice Hockey", "selected": false},
        {"name": "Triathlon", "selected": false},
        {"name": "American Football", "selected": false}
      ]
    }
  }
  playerInputs: string[] = [];
  title!: string;
  keyboardLetters: KeyBoardLetter [] = [];
  notSelectedWords: MysteryWord[] = [];
  mysteryWords: MysteryWord [] = [];
  mysteryWord: string[] = [];
  gameCurrentState: GAMES_STATES = GAMES_STATES.PAUSED;
  numberOfLetterToFound: WritableSignal<number> = signal<number>(0);
  numberOfLetterFound: WritableSignal<number> = signal<number>(0);
  errorCount: WritableSignal<number> = signal<number>(0);

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((value: any) => {
        this.title = this.formatTitle(value.cat.toString());
      });
    this.initGame();
  }

  private initGame() {

    let mysteryWord = this.generateMysteryWord();

    this.wordsCount.set(mysteryWord!.name.split(" ").length);

    this.lettersCount.set(mysteryWord!.name.length);

    this.numberOfLetterToFound.set(new Set(this.mysteryWord.join('')).size);

    this.attemptsLeft.set(this.generateNumberOfAttempts());

    this.keyboardLetters = this.generateAlphabet();

  }

  takePlayerInput(input: string): void {

    this.playerInputs.push(input);

    if (this.isInputInMysteryWord(input)) {

      this.incrementLetterFound();

      if (this.isWordComplete()) {

        this.openMenu(GAMES_STATES.WIN);

      }
    } else {
      this.handleIncorrectInput();
    }
  }

  private isInputInMysteryWord(input: string): boolean {
    return this.mysteryWord.join().replace(",", "").includes(input);
  }

  private incrementLetterFound(): void {
    this.numberOfLetterFound.set(this.numberOfLetterFound() + 1);
  }

  private isWordComplete(): boolean {
    return this.numberOfLetterFound() === this.numberOfLetterToFound();
  }

  private handleIncorrectInput(): void {
    if (this.isLastAttempt()) {
      this.openMenu(GAMES_STATES.LOSE);
    } else {
      this.incrementErrorCount();
    }
  }

  private isLastAttempt(): boolean {
    return (this.attemptsLeft() - this.errorCount()) === 1;
  }

  private incrementErrorCount(): void {
    this.errorCount.update(prevErrorCount => prevErrorCount + 1);
  }

  private generateMysteryWord(): MysteryWord | undefined {

    let mysteryWord: MysteryWord | undefined;

    let randomNumber: number;

    let category: CATEGORIES = this.setCategoryName(this.title);

    this.mysteryWords = this.data.categories[category];

    this.populateNotSelectedWords();

    if (!this.notSelectedWords.length) {
      this.unMarkSelectedWord(category);
    }

    randomNumber = Math.floor(Math.random() * this.notSelectedWords.length);

    mysteryWord = this.notSelectedWords.at(randomNumber);

    this.mysteryWord = mysteryWord!.name.toUpperCase().toUpperCase().split(' ');

    return mysteryWord;
  }

  unMarkSelectedWord(category: CATEGORIES) {
    this.notSelectedWords = [];
    this.data.categories[category].forEach(word => {
      word.selected = false;
      this.notSelectedWords.push(word)
    });

  }

  resetGame(): void {
    this.clearGameData();
    this.markSelectedWord();
    this.updateNumberOfLettersToFind();
    this.initGame();
  }

  private clearGameData(): void {
    this.notSelectedWords = [];
    this.numberOfLetterFound.set(0);
    this.errorCount.set(0);
    this.playerInputs = [];
  }

  private markSelectedWord(): void {
    let category: CATEGORIES = this.setCategoryName(this.title);
    this.data.categories[category].forEach(word => {
      if (this.isCurrentMysteryWord(word.name.toLowerCase())) {
        word.selected = true;
      }
    });
  }

  private isCurrentMysteryWord(wordName: string): boolean {
    return this.mysteryWord.join(' ').toLowerCase() === wordName;
  }

  private populateNotSelectedWords(): void {
    this.notSelectedWords = this.mysteryWords.filter(word => !word.selected);
  }

  private updateNumberOfLettersToFind(): void {
    const uniqueLetters = new Set(this.mysteryWord.join(''));
    this.numberOfLetterToFound.set(uniqueLetters.size);
  }

  openMenu(state: GAMES_STATES) {
    this.gameMenuState = GAME_MENU_STATE.OPENED;
    this.gameCurrentState = state;
  }

  closeMenu() {
    this.gameMenuState = GAME_MENU_STATE.CLOSED;
    if (this.gameCurrentState !== GAMES_STATES.PAUSED) {
      this.resetGame();
    }
  }

  generateNumberOfAttempts(): number {
    if (this.numberOfLetterToFound() <= 6) return 3;
    if (this.numberOfLetterToFound() > 6 && this.numberOfLetterToFound() < 12) return 4;
    if (this.numberOfLetterToFound() > 12 && this.numberOfLetterToFound() < 20) return 6;
    return 8;
  }

  computeLiveBarSize(): string {
    if (!this.errorCount()) return '100%';
    const valueToTakeBack = (100 / this.attemptsLeft()) * this.errorCount();
    return `${100 - valueToTakeBack}%`;
  }

  generateAlphabet(): KeyBoardLetter[] {
    return [{"value": "A", "used": false},
      {"value": "B", "used": false},
      {"value": "C", "used": false},
      {"value": "D", "used": false},
      {"value": "E", "used": false},
      {"value": "F", "used": false},
      {"value": "G", "used": false},
      {"value": "H", "used": false},
      {"value": "I", "used": false},
      {"value": "J", "used": false},
      {"value": "K", "used": false},
      {"value": "L", "used": false},
      {"value": "M", "used": false},
      {"value": "N", "used": false},
      {"value": "O", "used": false},
      {"value": "P", "used": false},
      {"value": "Q", "used": false},
      {"value": "R", "used": false},
      {"value": "S", "used": false},
      {"value": "T", "used": false},
      {"value": "U", "used": false},
      {"value": "V", "used": false},
      {"value": "W", "used": false},
      {"value": "X", "used": false},
      {"value": "Y", "used": false},
      {"value": "Z", "used": false},
      {"value": "'", used: false}
    ];
  }

  formatTitle(title: string): string {
    if (title !== "tv shows") return title.replace('_', ' ');
    return "TV Shows"
  }

  setCategoryName(category: string): CATEGORIES {
    switch (category) {
      case "movies" :
        return CATEGORIES.MOVIES;
      case "tv shows" :
        return CATEGORIES.TV_SHOWS;
      case "countries" :
        return CATEGORIES.COUNTRIES;
      case "capital cities" :
        return CATEGORIES.CAPITAL_CITIES;
      case "animals" :
        return CATEGORIES.ANIMALS;
      case "sports" :
        return CATEGORIES.SPORTS;
      default :
        return CATEGORIES.MOVIES
    }
  }

  protected readonly GAME_MENU_STATE = GAME_MENU_STATE;
  protected readonly GAMES_STATES = GAMES_STATES;
}
