import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { PagesModule } from '../pages.module';
import { MatChipsModule } from '@angular/material/chips';
import { HorizontalCardModule } from 'src/app/components/cards/horizontal-card/horizontal-card.module';
import { CastingCardModule } from 'src/app/components/cards/casting-card/casting-card.module';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    PagesModule,
    HorizontalCardModule,
    CastingCardModule,
    MatChipsModule
  ]
})
export class DetailModule { }
