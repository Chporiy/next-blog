import { User } from './types';

// eslint-disable-next-line import/prefer-default-export
export const selectUserById = (data: User[], id: number): User | undefined =>
  data?.find((user) => user.id === id);
