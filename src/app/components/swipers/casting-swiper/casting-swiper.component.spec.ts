import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastingSwiperComponent } from './casting-swiper.component';

describe('CastingSwiperComponent', () => {
  let component: CastingSwiperComponent;
  let fixture: ComponentFixture<CastingSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastingSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastingSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
