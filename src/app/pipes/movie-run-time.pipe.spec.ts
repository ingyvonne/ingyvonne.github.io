import { MovieRunTimePipe } from './movie-run-time.pipe';

describe('MovieRunTimePipe', () => {
  it('create an instance', () => {
    const pipe = new MovieRunTimePipe();
    expect(pipe).toBeTruthy();
  });
});
