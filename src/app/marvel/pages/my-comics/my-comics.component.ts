import { Comic } from './../../interfaces/marvel.interfaces';
import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-my-comics',
  templateUrl: './my-comics.component.html',
  styleUrls: ['./my-comics.component.scss']
})
export class MyComicsComponent implements OnInit {

  comics: Comic[] = [];

  constructor(private comicsService: ComicsService, private sppiner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.sppiner.show();
    this.comics = this.comicsService.getMyComics();
    setTimeout(() => {
      this.sppiner.hide();
    }, 500);
  }
}
