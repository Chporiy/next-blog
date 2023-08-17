import { User } from '~/shared/model';

import { allPostMocks } from '../../mocks/data/postMocks';

export const getUserPostsForTest = (userId: User['id']) =>
  allPostMocks.filter((post) => post.userId === userId);
