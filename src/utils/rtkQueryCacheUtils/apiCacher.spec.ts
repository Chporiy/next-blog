import apiCacher from './apiCacher';

describe('apiCacher', () => {
  const type1 = 'Post';
  const type2 = 'User';
  const tagListType1 = { type: type1, id: 'LIST' };
  const tagListType2 = { type: type2, id: 'LIST' };

  describe('providesTagsWithList()', () => {
    const ids = [
      { type: type1, id: 1 },
      { type: type1, id: 2 },
      { type: type2, id: 1 },
      { type: type2, id: 2 },
    ];

    it('should return entity cache to provide a list with entity ids and LIST_ID if result is exist', () => {
      const resultWithItems = [{ id: 1 }, { id: 2 }];

      const cacheTags = apiCacher.providesTagsWithList([type1, type2])(
        resultWithItems,
      );

      expect(cacheTags).toEqual(
        expect.arrayContaining([tagListType1, tagListType2, ...ids]),
      );
    });

    it('should return entity cache to provide a list with with LIST id if result isn`t exist', () => {
      const cacheTags = apiCacher.providesTagsWithList([type1, type2])(
        undefined,
      );

      expect(cacheTags).toEqual(
        expect.arrayContaining([tagListType1, tagListType2]),
      );
    });
  });

  describe('invalidatesTagsWithList()', () => {
    it('should return entity cache to invalidate a list with LIST id', () => {
      const cacheTags = apiCacher.invalidatesTagsWithList([type1, type2])();

      expect(cacheTags).toEqual(
        expect.arrayContaining([tagListType1, tagListType2]),
      );
    });
  });

  describe('cacheByIdArgument()', () => {
    it('should return entity cache for single item using the query argument as te ID', () => {
      const id = 1;
      const result = { id: 1, data: 'some data' };
      const cacheTags = apiCacher.cacheByIdArgument([type1, type2])(
        result,
        undefined,
        id,
      );

      expect(cacheTags).toEqual(
        expect.arrayContaining([
          { type: type1, id },
          { type: type2, id },
        ]),
      );
    });
  });

  describe('cacheByIdArgumentProperty()', () => {
    it('should return entity cache for single item using the id property from the query argument as te ID', () => {
      const args = { id: 1 };
      const result = { id: 1, data: 'some data' };
      const cacheTags = apiCacher.cacheByIdArgumentProperty([type1, type2])(
        result,
        undefined,
        args,
      );

      expect(cacheTags).toEqual(
        expect.arrayContaining([
          { type: type1, id: args.id },
          { type: type2, id: args.id },
        ]),
      );
    });
  });
});
