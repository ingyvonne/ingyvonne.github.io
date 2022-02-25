import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    PipesModule,
    LazyLoadImageModule
  ]
})
export class PagesModule { }
