import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/marvel.interfaces';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() public character!: Character;

  constructor() { }

  ngOnInit(): void {
    console.log(this.character);
  }

}
