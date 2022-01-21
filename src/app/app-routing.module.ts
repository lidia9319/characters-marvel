import { NavigationComponent } from './shared/navigation/navigation.component';
import { CharacterComponent } from './marvel/pages/character/character.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './marvel/pages/characters-list/characters-list.component';
import { MyComicsComponent } from './marvel/pages/my-comics/my-comics.component';

const routes: Routes = [

  {
    path: "marvel", component: NavigationComponent, children: [
      { path: "characters", component: CharactersListComponent },
      { path: "characters/:id", component: CharacterComponent },
      { path: "my-comics", component: MyComicsComponent },
      { path: "**", redirectTo: "characters" }
    ]
  }, {
    path: "**", redirectTo: "marvel"
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
