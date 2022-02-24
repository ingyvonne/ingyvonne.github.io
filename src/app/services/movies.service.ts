import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Globals } from '../config/Globals';
import { GenreResponseInterface } from '../interfaces/genre-interface';
import { MovieInterface, MovieResponseInterface } from '../interfaces/movie-list-interface';
import { TvShowResponseInterface } from '../interfaces/tv-show-list-interface';
import { map, catchError } from 'rxjs/operators';


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

  getPopularTvShows(): Observable<TvShowResponseInterface> {
    let params = this.getParams();
    params = params.append('page', '1');

    return this._http.get<TvShowResponseInterface>(`${this._globals.BASE_URL}/tv/popular`,{params});
  }

  getMovieGenres(): Observable<GenreResponseInterface> {
    const params = this.getParams();

    return this._http.get<GenreResponseInterface>(`${this._globals.BASE_URL}/genre/movie/list`,{params});
  }

  getTvShowGenres(): Observable<GenreResponseInterface> {
    const params = this.getParams();

    return this._http.get<GenreResponseInterface>(`${this._globals.BASE_URL}/genre/tv/list`,{params});
  }

}
