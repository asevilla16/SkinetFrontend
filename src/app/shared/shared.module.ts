import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { PagerComponent } from './pager/pager.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    PaginationHeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PaginationHeaderComponent,
    PagerComponent,
    CarouselModule
  ]
})
export class SharedModule { }
