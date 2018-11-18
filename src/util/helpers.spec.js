import { meaningFullTime } from './helpers';

describe('helpers', () => {
  it('meaningFullTime Should handle default dateFormat', () => {
    const time = meaningFullTime(new Date());
    expect(time).toBe('just now');
  });

  it('meaningFullTime Should handle dateFormat time', () => {
    const time = meaningFullTime(
      new Date().getTime() - 365 * 2 * 24 * 60 * 60 * 1000,
    );
    expect(time).toBe('2 years ago');
  });

  it('meaningFullTime Should handle dateFormat futures', () => {
    const time = meaningFullTime(Date.now() + 22 * 60 * 60 * 1000);
    expect(time).toBe('in 22 hours');
  });

  it('meaningFullTime Should be able to Format dateTimeString', () => {
    const time = meaningFullTime('2018-01-01T12:30:12');
    expect(time).toBeTruthy();
  });

  it('meaningFullTime Should return just now for invalid string', () => {
    const time = meaningFullTime('xx.yy.zzzz');
    expect(time).toBe('just now');
  });
});
