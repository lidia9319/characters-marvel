import { Router } from '@angular/router';
import { Comic } from './../../interfaces/marvel.interfaces';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-comic-modal',
  templateUrl: './comic-modal.component.html',
  styleUrls: ['./comic-modal.component.scss']
})
export class ComicModalComponent {
  constructor(public dialogRef: MatDialogRef<ComicModalComponent>, @Inject(MAT_DIALOG_DATA) public comic: Comic, private comicsService: ComicsService, private router: Router) { }

  close() {
    this.dialogRef.close();
  }

  comicIsDuplicated(comic: Comic) {
    if (this.comicsService.getMyComics().find(myComic => myComic.id === this.comic.id)) {
      return true;
    };

    return false;
  }

  addToFavorite(comic: Comic) {
    if (!this.comicIsDuplicated(comic)) {
      this.comicsService.addComic(comic);
      this.close();
      this.router.navigateByUrl("/marvel/my-comics");
    }
  }
}
