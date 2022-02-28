import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { CastInterface } from 'src/app/interfaces/credit-interface';


@Component({
  selector: 'app-casting-swiper',
  templateUrl: './casting-swiper.component.html',
  styleUrls: ['./casting-swiper.component.css', '../swiper-styles.css']
})
export class CastingSwiperComponent implements OnChanges {
  
  @Input() public casting!: CastInterface[];
  public loading = true;
  public castingCards!: CastInterface[];

  constructor(
  ) { }

  horizontalConfig: SwiperConfigInterface = {
      direction: 'horizontal',
      slidesPerView: 5,
      spaceBetween: 12,
      speed: 350,
      freeModeMomentumRatio: 0.3,
      freeModeSticky: true,
      freeMode: true,
      observeParents: true,
      observer: true,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1200: {
          spaceBetween: 5,
          slidesPerView: 4,
          slidesOffsetAfter: 12,
        },
        992: {
          spaceBetween: 5,
          slidesPerView: 3.2,
          slidesOffsetAfter: 12,
        },
        768: {
          spaceBetween: 5,
          slidesPerView: 2.5,
          slidesOffsetAfter: 12,
        },
        600: {
          spaceBetween: 5,
          slidesPerView: 1.7,
          slidesOffsetAfter: 12,
        }
      }
  };

  ngOnChanges(changes: SimpleChanges): void {

      if (changes && changes.casting && changes.casting.currentValue) {
          this.castingCards = changes.casting.currentValue;
      }
  }

  showCards() {
    this.loading = false;
  }

}
