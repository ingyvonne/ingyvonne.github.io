import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components.module';
import { CastingSwiperComponent } from './casting-swiper.component';
import { CastingCardModule } from '../../cards/casting-card/casting-card.module';
import { SwiperModule } from 'ngx-swiper-wrapper';



@NgModule({
  declarations: [
    CastingSwiperComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SwiperModule,
    CastingCardModule
  ],
  exports: [
    CastingSwiperComponent,
    SwiperModule
  ]
})
export class CastingSwiperModule { }
