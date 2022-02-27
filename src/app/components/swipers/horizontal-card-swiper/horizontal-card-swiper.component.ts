import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Globals } from 'src/app/config/Globals';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { CastInterface } from 'src/app/interfaces/credit-interface';
import { MovieInterface } from 'src/app/interfaces/movie-list-interface';
import { TvShowInterface } from 'src/app/interfaces/tv-show-list-interface';

@Component({
  selector: 'app-horizontal-card-swiper',
  templateUrl: './horizontal-card-swiper.component.html',
  styleUrls: ['./horizontal-card-swiper.component.css', '../swiper-styles.css']
})
export class HorizontalCardSwiperComponent implements OnInit, OnChanges {
  @Input() public similarMovies!: MovieInterface[];
  @Input() public similarTvShows!: TvShowInterface[];
  public loading = true;
  public similarMoviesCards!: MovieInterface[];
  public similarTvShowsCards!: TvShowInterface[];

  constructor(
      public _globals: Globals
  ) { }

  horizontalConfig: SwiperConfigInterface = {
      direction: 'horizontal',
      slidesPerView: 4,
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
          spaceBetween: 10,
          slidesPerView: 3,
          slidesOffsetAfter: 12,
        },
        992: {
          spaceBetween: 10,
          slidesPerView: 2.8,
          slidesOffsetAfter: 12,
        },
        768: {
          spaceBetween: 10,
          slidesPerView: 2.2,
          slidesOffsetAfter: 12,
        },
        520: {
          spaceBetween: 10,
          slidesPerView: 1.2,
          slidesOffsetAfter: 12,
        }
      }
  };

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes && changes.similarMovies && changes.similarMovies.currentValue) {
        this.similarMoviesCards = changes.similarMovies.currentValue;
    }
    if (changes && changes.similarTvShows && changes.similarTvShows.currentValue) {
      this.similarTvShowsCards = changes.similarTvShows.currentValue;
    }
  }

  showCards() {
    this.loading = false;
  }

}
