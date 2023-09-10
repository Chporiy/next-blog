import { User } from '~/shared/model';

export const userMock0: User = {
  id: '5391f7fd-0b90-4327-9225-3ccd0b70b378',
  fullName: 'John Smith',
  email: 'JohnSmith@mail.com',
  avatar: 'https://loremflickr.com/640/480/fashion',
};

export const userMock1: User = {
  id: 'ce2f7884-7e14-4e1c-bfe9-c7acc552bad1',
  fullName: 'John Doe',
  email: 'JohnDoe@mail.com',
  avatar: 'https://loremflickr.com/640/480/fashion',
};

export const allUserMocks = [userMock0, userMock1];
