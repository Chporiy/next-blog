export type User = {
  fullName: string;
  id: number;
  avatar: string;
  email: string;
};

export interface GetUserByIdRequest {
  id: User['id'];
}
