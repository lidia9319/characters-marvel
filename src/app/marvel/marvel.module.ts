import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CharacterComponent } from './pages/character/character.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ComicComponent } from './components/comic-tag/comic.component';
import { ComicModalComponent } from './components/comic-modal/comic-modal.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { MyComicsComponent } from './pages/my-comics/my-comics.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterCardComponent,
    CharacterComponent,
    SearchComponent,
    ComicComponent,
    ComicModalComponent,
    MyComicsComponent,
    ComicCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    MaterialModule,
    RouterModule
  ]
})
export class MarvelModule { }
