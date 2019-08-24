import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseeducationComponent } from './baseeducation/baseeducation.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [
    BaseeducationComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    BaseeducationComponent
  ]
})
export class EducationModule { }
