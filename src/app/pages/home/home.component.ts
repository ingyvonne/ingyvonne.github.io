import { Component, OnInit } from '@angular/core';
import { GenreInterface } from 'src/app/interfaces/genre-interface';
import { MovieInterface } from 'src/app/interfaces/movie-list-interface';
import { TvShowInterface } from 'src/app/interfaces/tv-show-list-interface';
import { MoviesService } from 'src/app/services/movies.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public selectMovies!: boolean;
  public selectTvShows!: boolean;
  public allMovies: MovieInterface[] = [];
  public allTvShows: TvShowInterface[] = [];
  public allMovieGenres: GenreInterface[] = [];
  public allTvShowGenres: GenreInterface[] = [];

  constructor(
    private _moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.initData();
    const type = sessionStorage.getItem('type');
    if (type) {
      this.setType(type);
    } else {
      this.setType('movie');
    }
  }

  initData() {
    combineLatest ([
      this._moviesService.getPopularMovies(),
      this._moviesService.getMovieGenres(),
      this._moviesService.getPopularTvShows(),
      this._moviesService.getTvShowGenres()

    ]).subscribe( ([allMovies, allMovieGenres, allTvShows, allTvShowGenres]) => {
      this.allMovies = allMovies;
      this.allMovieGenres = allMovieGenres.genres;
      this.allTvShows = allTvShows.results;
      this.allTvShowGenres = allTvShowGenres.genres;
      this.allMovies.forEach(movie => {
        this.getGenresForMovie(movie, this.allMovieGenres);
      });
      this.allTvShows.forEach(tvShow => {
        this.getGenresForTvShow(tvShow, this.allTvShowGenres);
      });
    });
  }

  getGenresForMovie(movie: MovieInterface, genresArray: GenreInterface[]) {
    let moviesGenresArray: GenreInterface[] = [];
    let genreFind;
      movie.genre_ids.forEach(genreId => {
        if (genresArray.some( genre => (genre.id === genreId))) {
          genreFind = genresArray.filter(genre => (genre.id === genreId));
          moviesGenresArray.push(genreFind[0]);
        }
      });
      movie.genres = moviesGenresArray;
  }

  getGenresForTvShow(tvShow: TvShowInterface, genresArray: GenreInterface[]) {
    let tvShowGenresArray: GenreInterface[] = [];
    let genreFind;
    tvShow.genre_ids.forEach(genreId => {
        if (genresArray.some( genre => (genre.id === genreId))) {
          genreFind = genresArray.filter(genre => (genre.id === genreId));
          tvShowGenresArray.push(genreFind[0]);
        }
      });
    tvShow.genres = tvShowGenresArray;
  }

  setType(type:string) {
    if (type === 'movie') {
      this.selectMovies = true;
      this.selectTvShows = false;
    } else if (type === 'tvShow') {
      this.selectTvShows = true;
      this.selectMovies = false;
    }
  }

}


