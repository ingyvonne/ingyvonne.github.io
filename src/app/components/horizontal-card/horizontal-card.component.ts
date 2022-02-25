import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { Globals } from 'src/app/config/Globals';
import { MovieInterface } from 'src/app/interfaces/movie-list-interface';
import { TvShowInterface } from 'src/app/interfaces/tv-show-list-interface';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css']
})
export class HorizontalCardComponent implements OnInit {
  @Input() public movie!: MovieInterface;
  @Input() public tvShow!: TvShowInterface;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';

    constructor(
    public _globals: Globals,
    private _router: Router
  ) { }

  ngOnInit(): void { }

  goToMovieDetail(movie: MovieInterface) {
    console.log(movie);
    this._router.navigate(['/movie', movie.id]);
  }

  goToTvShowDetail(tvShow: TvShowInterface) {
    console.log(tvShow);
    this._router.navigate(['/tv-show', tvShow.id]);
  }

}
