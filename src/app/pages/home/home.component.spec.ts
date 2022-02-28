import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, throwError } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { mockMovieGenre } from 'src/assets/mocks/movie-genre';
import { mockPopularMovies } from 'src/assets/mocks/popular-movies';
import { mockPopularTvShows } from 'src/assets/mocks/popular-tv-shows';
// import 'rxjs/add/observable/from';
import { HomeComponent } from './home.component';
import { mockMoviesService } from 'src/assets/mocks/movies-service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {provide: MoviesService, useValue: mockMoviesService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPopularMovies', fakeAsync(() => {
    // const movies = ['movie1', 'movie2', 'movie3']
    // spyOn(service, 'getPopularMovies').and.callFake(() => {
    //   return Observable.from([movies]);
    // });
    const popularMoviesSpy = spyOn(mockMoviesService, 'getPopularMovies');
    popularMoviesSpy.and.returnValue(of(mockPopularMovies));
    // spyOn(service, 'getPopularMovies');
    // spyOn(service, 'getMovieGenres');
    // spyOn(service, 'getPopularTvShows');
    // spyOn(service, 'getTvShowGenres');
    component.initData();
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getPopularMovies).toHaveBeenCalled();
    expect(component.allMovies).toBeDefined();
    expect(component.allMovies.length).toBeGreaterThan(0);
    expect(component.allMovies).toEqual(mockPopularMovies);

    // popularMoviesSpy.and.returnValue(throwError(() => 'error en servidor'));
    // component.allMovies = null;
    // component.initData();
    // tick();
    // fixture.detectChanges();
    // expect(mockMoviesService.getPopularMovies).toHaveBeenCalled();
    // expect(component.allMovies).toBeFalsy();

    // expect(service.getPopularMovies).toHaveBeenCalled();
    // expect(service.getMovieGenres).toHaveBeenCalled();
    // expect(service.getPopularTvShows).toHaveBeenCalled();
    // expect(service.getTvShowGenres).toHaveBeenCalled();
    // expect(component.allMovies).toBeDefined();
    // expect(component.allMovies.length).toBeGreaterThan(0);
  }));

  it('should call getPopularTvShows', fakeAsync(() => {
    spyOn(mockMoviesService, 'getPopularTvShows').and.returnValue(of(mockPopularTvShows));
    component.initData();
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getPopularTvShows).toHaveBeenCalled();
    expect(component.allTvShows).toBeDefined();
    // expect(component.allTvShows.length).toBeGreaterThan(0);
  }));

  it('should call getMovieGenres', fakeAsync(() => {
    spyOn(mockMoviesService, 'getMovieGenres').and.returnValue(of(mockMovieGenre));
    component.initData();
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getMovieGenres).toHaveBeenCalled();
    expect(component.allMovieGenres).toBeDefined();
    // expect(component.allMovieGenres.length).toBeGreaterThan(0);
  }));

  it('should call getTvShowGenres', fakeAsync(() => {
    spyOn(mockMoviesService, 'getTvShowGenres').and.returnValue(of(mockMovieGenre));
    component.initData();
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getTvShowGenres).toHaveBeenCalled();
    expect(component.allTvShowGenres).toBeDefined();
    // expect(component.allTvShowGenres.length).toBeGreaterThan(0);
  }));

});
