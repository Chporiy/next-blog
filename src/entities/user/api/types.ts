import { User } from '~/shared/model';

export type GetUsersRequest = void;
export type GetUsersResponse = User[];

export type GetUserRequest = User['id'];
export type GetUserResponse = User;
