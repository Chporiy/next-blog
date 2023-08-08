import { User } from '../../../src/features/users/types';
import { allPostMocks } from '../../mocks/data/postMocks';

const getUserPostsForTest = (userId: User['id']) =>
  allPostMocks.filter((post) => post.userId === userId);

export default getUserPostsForTest;
