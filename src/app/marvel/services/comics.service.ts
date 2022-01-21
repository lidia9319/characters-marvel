import { Comic } from './../interfaces/marvel.interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  myComics: Comic[] = [];

  constructor() {
    if (localStorage.getItem("comics")) {
      this.myComics = JSON.parse(localStorage.getItem("comics")!);
    } else {
      this.myComics = [];
    }
  }

  setMyComics(comics: Comic[]) {
    this.myComics = this.myComics;
  }

  getMyComics() {
    return this.myComics;
  }

  addComic(comic: any) {
    this.myComics.push(comic);
    localStorage.setItem("comics", JSON.stringify(this.myComics));
  }
}
