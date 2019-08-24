import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasehomeComponent } from './basehome/basehome.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [
    BasehomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    BasehomeComponent
  ]
})
export class HomeModule { }
