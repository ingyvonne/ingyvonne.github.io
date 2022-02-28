import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalConstants } from 'src/app/config/GlobalConstants';

import { CastingCardComponent } from './casting-card.component';

describe('CastingCardComponent', () => {
  let component: CastingCardComponent;
  let fixture: ComponentFixture<CastingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CastingCardComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CastingCardComponent', () => {
    expect(component).toBeTruthy();
  });
});
