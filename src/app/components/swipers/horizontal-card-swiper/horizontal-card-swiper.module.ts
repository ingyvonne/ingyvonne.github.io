import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components.module';
import { HorizontalCardSwiperComponent } from './horizontal-card-swiper.component';
import { HorizontalCardModule } from '../../cards/horizontal-card/horizontal-card.module';
import { SwiperModule } from 'ngx-swiper-wrapper';



@NgModule({
  declarations: [
    HorizontalCardSwiperComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SwiperModule,
    HorizontalCardModule
  ],
  exports: [
    HorizontalCardSwiperComponent,
    SwiperModule
  ]
})
export class HorizontalCardSwiperModule { }
