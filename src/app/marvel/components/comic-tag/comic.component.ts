import { MarvelService } from 'src/app/marvel/services/marvel.service';
import { Component, Input, OnInit } from '@angular/core';
import { Comic, ComicsItem } from '../../interfaces/marvel.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ComicModalComponent } from '../comic-modal/comic-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent {

  comic!: Comic;

  @Input() comicSelected!: ComicsItem;

  constructor(private marvelService: MarvelService, public dialog: MatDialog, private spinner: NgxSpinnerService) { }

  showInfoComic() {
    let path = this.comicSelected.resourceURI.split("/");


    this.spinner.show();
    this.marvelService.getComicById(Number(path[path.length - 1])).subscribe(response => {
      this.comic = response;
      this.openModal();
    });
    this.spinner.hide();
  }

  openModal() {
    const dialog = this.dialog.open(ComicModalComponent, {
      height: 'auto',
      data: this.comic,
      panelClass: "dialog-responsive"
    });
  }

}
