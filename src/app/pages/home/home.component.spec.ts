import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, throwError } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { mockMovieGenre } from 'src/assets/mocks/movie-genre';
import { mockPopularMovies } from 'src/assets/mocks/popular-movies';
import { mockPopularTvShows } from 'src/assets/mocks/popular-tv-shows';
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
    const popularMoviesSpy = spyOn(mockMoviesService, 'getPopularMovies');
    popularMoviesSpy.and.returnValue(of(mockPopularMovies));
    component.initData();
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getPopularMovies).toHaveBeenCalled();
    expect(component.allMovies).toBeDefined();
    expect(component.allMovies.length).toBeGreaterThan(0);
    expect(component.allMovies).toEqual(mockPopularMovies);
  }));

  it('should call getPopularTvShows', fakeAsync(() => {
    spyOn(mockMoviesService, 'getPopularTvShows').and.returnValue(of(mockPopularTvShows));
    component.initData();
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getPopularTvShows).toHaveBeenCalled();
    expect(component.allTvShows).toBeDefined();
  }));

  it('should call getMovieGenres', fakeAsync(() => {
    spyOn(mockMoviesService, 'getMovieGenres').and.returnValue(of(mockMovieGenre));
    component.initData();
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getMovieGenres).toHaveBeenCalled();
    expect(component.allMovieGenres).toBeDefined();
  }));

  it('should call getTvShowGenres', fakeAsync(() => {
    spyOn(mockMoviesService, 'getTvShowGenres').and.returnValue(of(mockMovieGenre));
    component.initData();
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getTvShowGenres).toHaveBeenCalled();
    expect(component.allTvShowGenres).toBeDefined();
  }));

});
