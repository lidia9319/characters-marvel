import { NavigationComponent } from './../shared/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characters/pages/characters-list/characters-list.component';
import { CharacterComponent } from './characters/pages/character/character.component';

const routes: Routes = [
  { path: "characters", component: CharactersListComponent },
  { path: "characters/:id", component: CharacterComponent },
  { path: "**", redirectTo: "characters" }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MarvelRoutingModule { }
