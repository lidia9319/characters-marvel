import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/marvel/interfaces/marvel.interfaces';
import { MarvelService } from 'src/app/marvel/services/marvel.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  public characters: Character[] = [];

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.marvelService.getAllCharacters().subscribe(response => {
      this.characters = response;
    });
  }
}
