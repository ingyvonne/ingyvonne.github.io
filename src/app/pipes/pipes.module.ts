import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRunTimePipe } from './movie-run-time.pipe';



@NgModule({
  declarations: [
    MovieRunTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieRunTimePipe
  ]
})
export class PipesModule { }
