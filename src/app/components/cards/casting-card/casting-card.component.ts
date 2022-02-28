import { Component, Input } from '@angular/core';
import { GlobalConstants } from 'src/app/config/GlobalConstants';
import { CastInterface } from 'src/app/interfaces/credit-interface';

@Component({
  selector: 'app-casting-card',
  templateUrl: './casting-card.component.html',
  styleUrls: ['./casting-card.component.css', '../card-styles.css']
})
export class CastingCardComponent {
  @Input() public cast!: CastInterface; 
  public _globals = GlobalConstants;

  constructor(
  ) { }

}
