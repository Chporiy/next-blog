type TagType = 'Post' | 'User';
type CacheItem<Type, ID> = { type: Type; id: ID };
type CacheList<Type, ID> = (CacheItem<Type, 'LIST'> | CacheItem<Type, ID>)[];

/**
 * Inner function returned by `providesList` to be passed to the `provides` property of a query
 */
type InnerProvidesList<Type> = <Result extends { id: unknown }>(
  results: Result | Result[] | undefined,
) => CacheList<Type, Result['id']>;

type InnerCacheByArgument<Type> = <ID, Result = undefined, Error = undefined>(
  result: Result,
  error: Error,
  id: ID,
) => readonly CacheItem<Type, ID>[];

type InnerCacheByArgumentProperty<Type> = <
  Arguments extends { id: unknown },
  Result = undefined,
  Error = undefined,
>(
  result: Result,
  error: Error,
  args: Arguments,
) => readonly CacheItem<Type, Arguments['id']>[] | [];

const setEntityCache = <Type extends TagType, ID>(
  type: Type,
  id: ID,
): CacheItem<Type, ID> => ({ type, id });

const providesTagsWithList =
  <Type extends TagType>(types: Type[]): InnerProvidesList<Type> =>
  (result) =>
    types.flatMap((type) => {
      const entityCacheList = setEntityCache(type, 'LIST');

      if (Array.isArray(result)) {
        return [
          entityCacheList,
          ...result.map(({ id }) => setEntityCache(type, id)),
        ];
      }

      return [entityCacheList];
    });

const invalidatesTagsWithList =
  <Type extends TagType>(types: Type[]): (() => CacheItem<Type, 'LIST'>[]) =>
  () =>
    types.map((type) => setEntityCache(type, 'LIST'));

const cacheByIdArgument =
  <Type extends TagType>(types: Type[]): InnerCacheByArgument<Type> =>
  (result, error, id) =>
    types.map((type) => setEntityCache(type, id));

const cacheByIdArgumentProperty =
  <Type extends TagType>(types: Type[]): InnerCacheByArgumentProperty<Type> =>
  (result, error, args) =>
    types.map((type) => setEntityCache(type, args.id));

export const apiCacher = {
  providesTagsWithList,
  invalidatesTagsWithList,
  cacheByIdArgument,
  cacheByIdArgumentProperty,
};
