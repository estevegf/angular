import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { EducationResolver } from './services/education.resolver';
import { BannerComponent } from './banner/banner.component';
import { LazyLoadDirective } from './directives/lazyLoad.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    LazyLoadDirective
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    LazyLoadDirective
  ],
  providers: []
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ApiService,
        EducationResolver
      ]
    };
  }
}
