import { MovieRunTimePipe } from './movie-run-time.pipe';

describe('MovieRunTimePipe', () => {
  it('create an instance MovieRunTimePipe', () => {
    const pipe = new MovieRunTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('should call MovieRunTimePipe for less than 10 minutes', () => {
    const pipe = new MovieRunTimePipe();
    const result = pipe.transform(128);
    expect(result).toEqual('2h 08m');
  });

  it('should call MovieRunTimePipe for more than 10 minutes', () => {
    const pipe = new MovieRunTimePipe();
    const result = pipe.transform(148);
    expect(result).toEqual('2h 28m');
  });
});
