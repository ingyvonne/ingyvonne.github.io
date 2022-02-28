import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { mockPopularMovies } from 'src/assets/mocks/popular-movies';
import { mockMoviesService } from 'src/assets/mocks/movies-service';
import { of, throwError } from 'rxjs';
import { mockPopularTvShows } from 'src/assets/mocks/popular-tv-shows';
import { mockMovieGenre } from 'src/assets/mocks/movie-genre';
import { mockTvShowGenre } from 'src/assets/mocks/tv-show-genre';
import { mockMovieDetail } from 'src/assets/mocks/movie-detail';
import { mockTvShowDetail } from 'src/assets/mocks/tv-show-detail';


describe('MoviesService', () => {
  let service: MoviesService;
  let httpClientSpy: {get: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MoviesService(httpClientSpy as any);
  });

  it('should be created MoviesService', () => {
    expect(service).toBeTruthy();
  });

  it('should getPopularMovies from server TMDB response', () => {
    httpClientSpy.get.and.returnValue(of(mockPopularMovies));

    service.getPopularMovies();
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should getPopularMovies when the server TMDB return 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));
    service.getPopularMovies();

    let result;
    service.getPopularMovies().subscribe(
      (resp) => (result = resp),
      (error) => (result = undefined)
    );
    expect(result).toBeUndefined();
  });

  it('should getPopularTvShows from server TMDB response', () => {
    httpClientSpy.get.and.returnValue(of(mockPopularTvShows));

    service.getPopularTvShows();
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should getPopularTvShows when the server TMDB return 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));
    service.getPopularTvShows();

    let result;
    service.getPopularTvShows().subscribe(
      (resp) => (result = resp),
      (error) => (result = undefined)
    );
    expect(result).toBeUndefined();
  });

  it('should getMovieGenres from server TMDB response', () => {
    httpClientSpy.get.and.returnValue(of(mockMovieGenre));

    service.getMovieGenres();
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should getMovieGenres when the server TMDB return 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));
    service.getMovieGenres();

    let result;
    service.getMovieGenres().subscribe(
      (resp) => (result = resp),
      (error) => (result = undefined)
    );
    expect(result).toBeUndefined();
  });

  it('should getTvShowGenres from server TMDB response', () => {
    httpClientSpy.get.and.returnValue(of(mockTvShowGenre));

    service.getTvShowGenres();
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should getTvShowGenres when the server TMDB return 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));
    service.getTvShowGenres();

    let result;
    service.getTvShowGenres().subscribe(
      (resp) => (result = resp),
      (error) => (result = undefined)
    );
    expect(result).toBeUndefined();
  });

  it('should getMovieDetail from server TMDB response', () => {
    httpClientSpy.get.and.returnValue(of(mockMovieDetail));

    service.getMovieDetail('634649');
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should getMovieDetail when the server TMDB return 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));
    service.getMovieDetail('634649');

    let result;
    service.getMovieDetail('634649').subscribe(
      (resp) => (result = resp),
      (error) => (result = null)
    );
    expect(result).toBeNull();
  });

  it('should getTvShowDetail from server TMDB response', () => {
    httpClientSpy.get.and.returnValue(of(mockTvShowDetail));

    service.getTvShowDetail('85552');
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should getTvShowDetail when the server TMDB return 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));
    service.getTvShowDetail('85552');

    let result;
    service.getTvShowDetail('85552').subscribe(
      (resp) => (result = resp),
      (error) => (result = null)
    );
    expect(result).toBeNull();
  });
});
