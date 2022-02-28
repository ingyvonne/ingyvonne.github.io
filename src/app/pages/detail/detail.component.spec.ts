import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { mockMovieDetail } from 'src/assets/mocks/movie-detail';
import { mockMovieGenre } from 'src/assets/mocks/movie-genre';
import { mockMoviesService } from 'src/assets/mocks/movies-service';
import { mockTvShowDetail } from 'src/assets/mocks/tv-show-detail';
import { mockTvShowGenre } from 'src/assets/mocks/tv-show-genre';

import { DetailComponent } from './detail.component';

const mockActivatedRoute = {
  snapshot: { params: { id: 634649 } }
};

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DetailComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: MoviesService, useValue: mockMoviesService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Location, useValue: window.location}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DetailComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMovieDetail', fakeAsync(() => {
    const movieDetailSpy = spyOn(mockMoviesService, 'getMovieDetail');
    movieDetailSpy.and.returnValue(of(mockMovieDetail));
    component.getMovieDetail('634649');
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getMovieDetail).toHaveBeenCalled();
    expect(component.movie).toBeDefined();
    expect(component.movie).toEqual(mockMovieDetail);

  }));

  it('should call getMovieGenres', fakeAsync(() => {
    spyOn(mockMoviesService, 'getMovieGenres').and.returnValue(of(mockMovieGenre));
    component.getMovieDetail('634649');
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getMovieGenres).toHaveBeenCalled();
    expect(component.allMovieGenres).toBeDefined();
    // expect(component.allTvShows.length).toBeGreaterThan(0);
  }));

  it('should call getTvShowDetail', fakeAsync(() => {
    spyOn(mockMoviesService, 'getTvShowDetail').and.returnValue(of(mockTvShowDetail));
    component.getTvShowDetail('85552');
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getTvShowDetail).toHaveBeenCalled();
    expect(component.tvShow).toBeDefined();
    expect(component.tvShow).toEqual(mockTvShowDetail);
    // expect(component.allTvShows.length).toBeGreaterThan(0);
  }));
  
  it('should call getTvShowGenres', fakeAsync(() => {
    spyOn(mockMoviesService, 'getTvShowGenres').and.returnValue(of(mockTvShowGenre));
    component.getTvShowDetail('85552');
    tick();
    fixture.detectChanges();
    expect(mockMoviesService.getTvShowGenres).toHaveBeenCalled();
    expect(component.allTvShowGenres).toBeDefined();
    // expect(component.allTvShows.length).toBeGreaterThan(0);
  }));
});
