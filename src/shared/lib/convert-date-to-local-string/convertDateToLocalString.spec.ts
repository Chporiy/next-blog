import { convertDateToLocalString } from './convertDateToLocalString';

describe('convertDateToLocalString()', () => {
  it('should return local date and local time of date', () => {
    const date = '2022-01-01T00:00:00.000Z';

    expect(convertDateToLocalString(date)).toEqual(
      new Date(date).toLocaleString(),
    );
  });
});
