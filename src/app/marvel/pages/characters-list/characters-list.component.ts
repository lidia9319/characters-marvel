import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Character } from 'src/app/marvel/interfaces/marvel.interfaces';
import { MarvelService } from 'src/app/marvel/services/marvel.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  page: number = 1;
  characters: Character[] = [];

  constructor(private marvelService: MarvelService, private sppiner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.sppiner.show();

    this.marvelService.getAllCharacters(20).subscribe(response => {
      this.characters = response;
    }).add(() => {
      this.sppiner.hide();
    });
  }

  getCharactersByNameStartsWith(name: string) {
    this.sppiner.show();
    this.marvelService.getCharactersByNameStartsWith(name).subscribe(response => {
      this.characters = response;
    }).add(() => {
      this.page = 1;
      this.sppiner.hide();
    });
  }
}
