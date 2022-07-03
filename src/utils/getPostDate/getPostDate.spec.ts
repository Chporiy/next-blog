import getPostDate from './getPostDate';

describe('getPostDate()', () => {
  it('should return day month and year of date', () => {
    const date = '2022-01-01T00:00:00.000Z';

    expect(getPostDate(date)).toEqual('01.01.2022');
  });
});
