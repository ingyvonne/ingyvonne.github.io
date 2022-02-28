import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalConstants } from 'src/app/config/GlobalConstants';

import { HorizontalCardComponent } from './horizontal-card.component';

describe('HorizontalCardComponent', () => {
  let component: HorizontalCardComponent;
  let fixture: ComponentFixture<HorizontalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HorizontalCardComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HorizontalCardComponent', () => {
    expect(component).toBeTruthy();
  });
});
