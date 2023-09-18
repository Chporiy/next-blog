import { Comment } from '~/shared/model';

export const getFixedCacheKey = (id: Comment['id']) =>
  `fixed-cache-key-for-${id}`;
