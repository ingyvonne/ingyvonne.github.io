import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastingCardComponent } from './casting-card.component';
import { ComponentsModule } from '../../components.module';



@NgModule({
  declarations: [
    CastingCardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CastingCardComponent
  ]
})
export class CastingCardModule { }
