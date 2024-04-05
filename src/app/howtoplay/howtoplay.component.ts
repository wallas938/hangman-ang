import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CardComponent} from "./card/card.component";
import {HeaderComponent} from "./header/header.component";

interface CardContent {
  number: string;
  rule: string;
  description: string
}

@Component({
  selector: 'app-howtoplay',
  standalone: true,
  imports: [
    RouterLink,
    CardComponent,
    HeaderComponent
  ],
  templateUrl: './howtoplay.component.html',
  styleUrl: './howtoplay.component.scss'
})
export class HowtoplayComponent {
  cardContent: CardContent[] = [
    {
      number: '01',
      rule: "Choose a category",
      description: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
    },
    {
      number: '02',
      rule: "Guess letters",
      description: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."
    },
    {
      number: '03',
      rule: "Win or lose",
      description: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
    },
  ]
}
