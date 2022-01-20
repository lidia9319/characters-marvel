import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters/pages/characters-list/characters-list.component';
import { MarvelRoutingModule } from './marvel-routing.module';
import { MaterialModule } from '../material/material.module';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CharacterImagePipe } from './pipes/character-image.pipe';
import { CharacterComponent } from './characters/pages/character/character.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterCardComponent,
    CharacterImagePipe,
    CharacterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    MarvelRoutingModule
  ]
})
export class MarvelModule { }
