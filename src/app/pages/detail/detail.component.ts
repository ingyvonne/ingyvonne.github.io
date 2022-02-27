import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Globals } from 'src/app/config/Globals';
import { CastInterface } from 'src/app/interfaces/credit-interface';
import { GenreInterface, MovieDetailInterface } from 'src/app/interfaces/movie-detail-interface';
import { MovieInterface } from 'src/app/interfaces/movie-list-interface';
import { TvShowDetailInterface } from 'src/app/interfaces/tv-show-detail-interface';
import { TvShowInterface } from 'src/app/interfaces/tv-show-list-interface';
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
  public similarMovies!: MovieInterface[];
  public similarTvShows!: TvShowInterface[];
  public expandedOverview = false;
  public allMovieGenres: GenreInterface[] = [];
  public allTvShowGenres: GenreInterface[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _moviesService: MoviesService,
    private _location: Location,
    private _router: Router,
    public _globals: Globals
  ) {
    // override the route reuse strategy
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this._router.navigated = false;
        this.scrollToTop();
      }
    });

    const id = this._activatedRoute.snapshot.params.id;

    const pathname = window.location.pathname;
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

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  goBack() {
    this._location.back();
    this.scrollToTop();
  }

  getTvShowDetail(id: string) {
    combineLatest([
      this._moviesService.getTvShowDetail(id),
      this._moviesService.getTvShowGenres()
    ])
      .subscribe(([detail, allTvShowGenres]) => {
        if (!detail) {
          this._router.navigate(['/']);
          return;
        }
        this.tvShow = detail;
        this.allTvShowGenres = allTvShowGenres.genres;
        this.getCreator(this.tvShow);
        this.getCasting(this.tvShow);
        this.getTvShowCertification(this.tvShow);
        this.getSimilarTvShows(this.tvShow, this.allTvShowGenres);
      });
  }

  getMovieDetail(id: string) {
    combineLatest([
      this._moviesService.getMovieDetail(id),
      this._moviesService.getMovieGenres()
    ])
      .subscribe(([detail, allMovieGenres]) => {
        if (!detail) {
          this._router.navigate(['/']);
          return;
        }
        this.movie = detail;
        this.allMovieGenres = allMovieGenres.genres;
        this.getDirector(this.movie);
        this.getCasting(this.movie);
        this.getMovieCertification(this.movie);
        this.getSimilarMovies(this.movie, this.allMovieGenres);
      });
  }

  getSimilarMovies(element: MovieDetailInterface, genresArray: GenreInterface[]) {
    let movies: MovieInterface[] = [];
    let moviesGenresArray: GenreInterface[] = [];
    let genreFind;
    const path = 'movie/:id';
    if (element && element.similar && (element.similar['results'])) {
      movies = element.similar['results'];
      movies.forEach(movie => {
        movie.genre_ids.forEach(genreId => {
          if (genresArray.some(genre => (genre.id === genreId))) {
            genreFind = genresArray.filter(genre => (genre.id === genreId));
            moviesGenresArray.push(genreFind[0]);
          }
        });
        movie.genres = moviesGenresArray;
        movie.route = '/' + path.replace(':id', movie.id.toString());
      });
      this.similarMovies = movies;
    }
  }

  getSimilarTvShows(element: TvShowDetailInterface, genresArray: GenreInterface[]) {
    let tvShows: TvShowInterface[] = [];
    let tvShowGenresArray: GenreInterface[] = [];
    let genreFind;
    const path = 'tv-show/:id';
    if (element && element.similar && (element.similar['results'])) {
      tvShows = element.similar['results'];
      tvShows.forEach(tvShow => {
        tvShow.genre_ids.forEach(genreId => {
          if (genresArray.some(genre => (genre.id === genreId))) {
            genreFind = genresArray.filter(genre => (genre.id === genreId));
            tvShowGenresArray.push(genreFind[0]);
          }
        });
        tvShow.genres = tvShowGenresArray;
        tvShow.route = '/' + path.replace(':id', tvShow.id.toString());
      });
      this.similarTvShows = tvShows;
    }
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
    this.casting = [];
    if (element && element.credits && (element.credits['cast'])) {
      const result = element.credits['cast'];
      result.forEach(cast => {
        if (cast.profile_path) {
          this.casting.push(cast);
        }
      });
    }
  }

  getMovieCertification(element: MovieDetailInterface) {
    if (element?.release_dates && element?.release_dates.results) {
      const result = element.release_dates['results'];
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
      const result = element.content_ratings['results'];
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
