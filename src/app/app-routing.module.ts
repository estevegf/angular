import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasehomeComponent } from './home/basehome/basehome.component';
import { BaseeducationComponent } from './education/baseeducation/baseeducation.component';
import { EducationResolver } from './core/services/education.resolver';

const routes: Routes = [
  {
    path: '',
    component: BasehomeComponent
  },
  {
    path: 'education',
    component: BaseeducationComponent,
    resolve: {
      education: EducationResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
