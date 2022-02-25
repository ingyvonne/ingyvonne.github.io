import { Component, Input, OnInit } from '@angular/core';
import { Globals } from 'src/app/config/Globals';
import { CastInterface } from 'src/app/interfaces/credit-interface';

@Component({
  selector: 'app-casting-card',
  templateUrl: './casting-card.component.html',
  styleUrls: ['./casting-card.component.css', '../card-styles.css']
})
export class CastingCardComponent implements OnInit {
  @Input() public cast!: CastInterface; 
  
  constructor(
    public _globals: Globals
  ) { }

  ngOnInit(): void {
  }

}
