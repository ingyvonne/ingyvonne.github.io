import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Globals } from '../config/Globals';
import { GenreResponseInterface } from '../interfaces/genre-interface';
import { MovieInterface, MovieResponseInterface } from '../interfaces/movie-list-interface';
import { TvShowInterface, TvShowResponseInterface } from '../interfaces/tv-show-list-interface';
import { map, catchError } from 'rxjs/operators';
import { MovieDetailInterface } from '../interfaces/movie-detail-interface';
import { TvShowDetailInterface } from '../interfaces/tv-show-detail-interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private _http: HttpClient,
    private _globals: Globals
  ) { }

  getParams() {
    return new HttpParams()
      .set('api_key', '473dc226656e93209ac32c9f1583b5d0')
      .set('language', 'es-ES');
  }

  getPopularMovies(): Observable<MovieInterface[]> {
    let params = this.getParams();
    params = params.append('page', '1');

    return this._http.get<MovieResponseInterface>(`${this._globals.BASE_URL}/movie/popular`,{params})
    .pipe(
      map(resp => resp.results)
    );
  }

  getPopularTvShows(): Observable<TvShowInterface[]> {
    let params = this.getParams();
    params = params.append('page', '1');

    return this._http.get<TvShowResponseInterface>(`${this._globals.BASE_URL}/tv/popular`,{params})
    .pipe(
      map(resp => resp.results)
    );
  }

  getMovieGenres(): Observable<GenreResponseInterface> {
    const params = this.getParams();

    return this._http.get<GenreResponseInterface>(`${this._globals.BASE_URL}/genre/movie/list`,{params});
  }

  getTvShowGenres(): Observable<GenreResponseInterface> {
    const params = this.getParams();

    return this._http.get<GenreResponseInterface>(`${this._globals.BASE_URL}/genre/tv/list`,{params});
  }
  
  getMovieDetail(id: string): Observable<MovieDetailInterface | null> {
    let params = this.getParams();
    params = params.append('append_to_response', 'release_dates,credits,similar')

    return this._http.get<MovieDetailInterface>(`${this._globals.BASE_URL}/movie/${id}`, {params})
    .pipe(
      catchError(err => of(null))
    );
  }

  getTvShowDetail(id: string): Observable<TvShowDetailInterface | null> {
    let params = this.getParams();
    params = params.append('append_to_response', 'content_ratings,credits,similar')

    return this._http.get<TvShowDetailInterface>(`${this._globals.BASE_URL}/tv/${id}`, {params})
    .pipe(
      catchError(err => of(null))
    );
  }

}
