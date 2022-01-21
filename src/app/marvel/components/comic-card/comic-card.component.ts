import { Comic } from './../../interfaces/marvel.interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent {

  @Input() comic!: Comic;

  constructor() { }
}
