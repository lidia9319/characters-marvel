import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public term: string = '';

  @Output() newCharactersEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() initCharactersEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  handleKeyUp(event: KeyboardEvent) {
    if (!this.isValidFieldTerm() && event.key === "Backspace") {
      this.initCharactersEvent.emit();
    }

    if (this.isValidFieldTerm() && (event.key === 'Enter' || event.code === 'Enter')) {
      this.searchCharactersByName(this.term);
    }
  }

  isValidFieldTerm(): boolean {
    return this.term !== "";
  }

  handleClick() {
    if (this.isValidFieldTerm()) {
      this.searchCharactersByName(this.term);
    }
  }

  searchCharactersByName(name: string) {
    this.newCharactersEvent.emit(name);
  }
}
