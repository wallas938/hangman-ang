import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true}) rule_number: string = '';
  @Input({required: true}) rule: string = "";
  @Input({required: true}) description: string = "";
}
