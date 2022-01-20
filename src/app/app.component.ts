import { Component } from '@angular/core';
import { MarvelService } from './marvel/services/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel-characters';

  constructor(private marvelService: MarvelService) {
    /* this.marvelService.getAllCharacters().subscribe(response => {
      console.log(response);
    }); */
  }
}
