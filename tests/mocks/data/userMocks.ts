import { User } from '~/shared/model';

export const userMock0: User = {
  id: 0,
  fullName: 'John Smith',
  email: 'JohnSmith@mail.com',
  avatar: 'https://loremflickr.com/640/480/fashion',
};

export const userMock1: User = {
  id: 1,
  fullName: 'John Doe',
  email: 'JohnDoe@mail.com',
  avatar: 'https://loremflickr.com/640/480/fashion',
};

export const allUserMocks = [userMock0, userMock1];
