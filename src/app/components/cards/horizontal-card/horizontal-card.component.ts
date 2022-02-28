import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { GlobalConstants } from 'src/app/config/GlobalConstants';
import { MovieInterface } from 'src/app/interfaces/movie-list-interface';
import { TvShowInterface } from 'src/app/interfaces/tv-show-list-interface';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css', '../card-styles.css']
})
export class HorizontalCardComponent {
  @Input() public movie!: MovieInterface;
  @Input() public tvShow!: TvShowInterface;
  public color: ThemePalette = 'primary';
  public mode: ProgressSpinnerMode = 'determinate';
  public _globals = GlobalConstants;

    constructor(
  ) { }

}
