import { HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { GenreResponseInterface } from "src/app/interfaces/genre-interface";
import { MovieDetailInterface } from "src/app/interfaces/movie-detail-interface";
import { MovieInterface } from "src/app/interfaces/movie-list-interface";
import { TvShowDetailInterface } from "src/app/interfaces/tv-show-detail-interface";
import { TvShowInterface } from "src/app/interfaces/tv-show-list-interface";
import { mockMovieGenre } from "./movie-genre";
import { mockPopularMovies } from "./popular-movies";
import { mockPopularTvShows } from "./popular-tv-shows";
import { mockTvShowGenre } from "./tv-show-genre";

export const mockMoviesService: {
    getParams: () => HttpParams,
    getPopularMovies: () => Observable<MovieInterface[]>,
    getPopularTvShows: () => Observable<TvShowInterface[]>,
    getMovieGenres: () => Observable<GenreResponseInterface>,
    getTvShowGenres: () => Observable<GenreResponseInterface>,
    getMovieDetail: () => Observable<MovieDetailInterface | null>,
    getTvShowDetail: () => Observable<TvShowDetailInterface | null>,
} = {
    getParams: () => new HttpParams(),
    getPopularMovies: () => of(mockPopularMovies),
    getPopularTvShows: () => of(mockPopularTvShows),
    getMovieGenres: () => of(mockMovieGenre),
    getTvShowGenres: () => of(mockTvShowGenre),
    getMovieDetail: () => of(null),
    getTvShowDetail: () => of(null)
};