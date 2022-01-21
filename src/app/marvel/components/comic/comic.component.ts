import { MarvelService } from 'src/app/marvel/services/marvel.service';
import { Component, Input, OnInit } from '@angular/core';
import { ComicsItem } from '../../interfaces/marvel.interfaces';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  @Input() comic!: ComicsItem;

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
  }

  showInfoComic() {
    this.marvelService.getComic(this.comic.resourceURI).subscribe(response => {
      console.log(response, this.comic);
    });
  }

}
