import { Component, OnInit } from '@angular/core';
import { copyFile } from 'fs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public term: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleKeyPress(event: KeyboardEvent) {
    if (
      (event.key === 'Enter' || event.code === 'Enter') &&
      this.isValidFieldTerm()
    ) {
      this.searchCharactersByName(this.term);
    }
  }

  isValidFieldTerm(): boolean {
    return this.term.trim() !== '';
  }

  handleClick() {
    if (!this.isValidFieldTerm()) return;

    this.searchCharactersByName(this.term);
  }

  searchCharactersByName(name: string) {
    console.log('name', name);
  }
}
