import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
