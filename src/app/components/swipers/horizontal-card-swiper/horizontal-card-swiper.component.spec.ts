import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCardSwiperComponent } from './horizontal-card-swiper.component';

describe('HorizontalCardSwiperComponent', () => {
  let component: HorizontalCardSwiperComponent;
  let fixture: ComponentFixture<HorizontalCardSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalCardSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalCardSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
