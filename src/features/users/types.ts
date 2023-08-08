export type User = {
  fullName: string;
  id: number;
  avatar: string;
  email: string;
};

export type GetUsersRequest = void;
export type GetUsersResponse = User[];

export type GetUserRequest = User['id'];
export type GetUserResponse = User;
