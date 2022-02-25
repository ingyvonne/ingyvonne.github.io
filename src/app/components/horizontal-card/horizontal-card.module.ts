import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalCardComponent } from './horizontal-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { ComponentsModule } from '../components.module';



@NgModule({
  declarations: [
    HorizontalCardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatCardModule,
    MatChipsModule,
    PipesModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HorizontalCardComponent
  ]
})
export class HorizontalCardModule { }
