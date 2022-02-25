import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Globals } from 'src/app/config/Globals';
import { CastInterface } from 'src/app/interfaces/credit-interface';
import { MovieDetailInterface } from 'src/app/interfaces/movie-detail-interface';
import { TvShowDetailInterface } from 'src/app/interfaces/tv-show-detail-interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public movie!: MovieDetailInterface | null;
  public tvShow!: TvShowDetailInterface | null;
  public type!: string;
  public casting!: CastInterface[];
  public director!: string;
  public creator!: string;
  public certification!: string;
  public expandedOverview = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _moviesService: MoviesService,
    private _location: Location,
    private _router: Router,
    public _globals: Globals
  ) {
    const id = this._activatedRoute.snapshot.params.id;

    const pathname = window.location.pathname;
    console.log('window.location.pathname', window.location.pathname);
    if (pathname.includes('movie')) {
      this.getMovieDetail(id);
      this.type = 'movie';
      sessionStorage.setItem('type', this.type);
    } else if (pathname.includes('tv-show')) {
      this.getTvShowDetail(id);
      this.type = 'tvShow';
      sessionStorage.setItem('type', this.type);
    }
  }

  ngOnInit(): void {
  }

  goBack() {
    this._location.back();
  }

  getTvShowDetail(id: string) {
    this._moviesService.getTvShowDetail(id)
    .subscribe(resp => {
      if (!resp) {
        this._router.navigate(['/']);
        return;
      }
      this.tvShow = resp;
      this.getCreator(this.tvShow);
      this.getCasting(this.tvShow);
      this.getTvShowCertification(this.tvShow);
    });
  }

  getMovieDetail(id: string) {
    this._moviesService.getMovieDetail(id)
    .subscribe(resp => {
      if (!resp) {
        this._router.navigate(['/']);
        return;
      }
      this.movie = resp;
      this.getDirector(resp);
      this.getCasting(this.movie);
      this.getMovieCertification(this.movie);
      
    });
  }

  getCreator(element: TvShowDetailInterface) {
    if (element && element.created_by && (element.created_by[0])) {
      this.creator = element.created_by[0].name;
    }
  }

  getDirector(element: MovieDetailInterface) {
    if (element && element.credits && (element.credits['crew'])) {
      if (element.credits['crew'] && (element.credits['crew'].length > 0)) {
        element.credits['crew'].forEach(item => {
          if (item.job === 'Director') {
            this.director = item.name;
          }
        });
      }
    }
  }

  getCasting(element: MovieDetailInterface | TvShowDetailInterface) {
    if (element && element.credits && (element.credits['cast'])) {
      this.casting = element.credits['cast'];
    }
  }

  getMovieCertification(element: MovieDetailInterface) {
    if (element?.release_dates && element?.release_dates.results) {
      const result =  element.release_dates['results'];
      if (result && (result.length > 0)) {
        result.forEach(cert => {
          if ((cert.iso_3166_1 === "ES") && (cert.release_dates) && (cert.release_dates.length > 0)) {
            if (cert.release_dates[0].certification) {
              this.certification = cert.release_dates[0].certification;
            }
          }
        });
      }
    }
  }

  getTvShowCertification(element: TvShowDetailInterface) {
    if (element?.content_ratings && element?.content_ratings.results) {
      const result =  element.content_ratings['results'];
      if (result && (result.length > 0)) {
        result.forEach(cert => {
          if ((cert.iso_3166_1 === "ES") && (cert.rating)) {
            this.certification = cert.rating;
          }
        });
      }

    }
  }

  toggleOverview() {
    if (this.expandedOverview) { this.expandedOverview = false; } else { this.expandedOverview = true; }
  }

}
