import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/marvel.interfaces';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {

  @Input() character!: Character;

  constructor() { }
}
