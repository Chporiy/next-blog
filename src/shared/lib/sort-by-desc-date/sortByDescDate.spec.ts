import { sortByDescDate } from './sortByDescDate';

describe('sortByDescDate()', () => {
  const data = [
    { date: new Date('1.2.1970').toLocaleString() },
    { date: new Date('1.1.1970').toLocaleString() },
    { date: new Date('1.3.1970').toLocaleString() },
  ];
  const expectedResult = [
    { date: new Date('1.3.1970').toLocaleString() },
    { date: new Date('1.2.1970').toLocaleString() },
    { date: new Date('1.1.1970').toLocaleString() },
  ];

  it('should sort some data by desc date', () => {
    const result = sortByDescDate(data);

    expect(result).toEqual(expectedResult);
  });
});
