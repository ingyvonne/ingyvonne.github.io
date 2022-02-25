import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { PagesModule } from '../pages.module';
import { MatChipsModule } from '@angular/material/chips';
import { HorizontalCardModule } from 'src/app/components/horizontal-card/horizontal-card.module';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    PagesModule,
    HorizontalCardModule,
    MatChipsModule
  ]
})
export class DetailModule { }
