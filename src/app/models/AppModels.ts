export enum GAME_MENU_STATE {
  OPENED = "OPEN",
  CLOSED = "CLOSED"
}

export enum GAMES_STATES {
  PAUSED = "Paused",
  WIN = "You Win",
  LOSE = "You Lose",
}

export enum CATEGORIES {
  MOVIES = "Movies",
  TV_SHOWS = "TV Shows",
  COUNTRIES = "Countries",
  CAPITAL_CITIES = "Capital Cities",
  ANIMALS = "Animals",
  SPORTS = "Sports",
}

export interface GameData {
  categories: {
    "Movies": MysteryWord[],
    "TV Shows": MysteryWord[],
    "Countries": MysteryWord[],
    "Capital Cities": MysteryWord[],
    "Animals": MysteryWord[],
    "Sports": MysteryWord[],
  }
}

export interface MysteryWord {
  name: string;
  selected: boolean;
}

export interface KeyBoardLetter {
  value: string;
  used: boolean;
}
