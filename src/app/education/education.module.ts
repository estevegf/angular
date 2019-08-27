import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseeducationComponent } from './baseeducation/baseeducation.component';
import {CoreModule} from '../core/core.module';
import { CardeducationComponent } from './cardeducation/cardeducation.component';

@NgModule({
  declarations: [
    BaseeducationComponent,
    CardeducationComponent
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
