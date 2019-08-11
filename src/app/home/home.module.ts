import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasehomeComponent } from './basehome/basehome.component';

@NgModule({
  declarations: [
    BasehomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasehomeComponent
  ]
})
export class HomeModule { }
