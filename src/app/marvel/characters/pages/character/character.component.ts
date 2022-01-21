import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { switchMap } from 'rxjs/operators';
import { Character } from 'src/app/marvel/interfaces/marvel.interfaces';
import { MarvelService } from 'src/app/marvel/services/marvel.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  public character!: Character;

  constructor(private marvelService: MarvelService, private activatedRoute: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.marvelService.getCharacterById(id))
    ).subscribe(response => {
      this.character = response;
    })
    this.spinner.hide();
  }

  comeback(): void {
    this.router.navigate(["./marvel/characters"]);
  }
}
