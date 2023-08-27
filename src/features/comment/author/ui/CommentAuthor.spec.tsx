import { rootReducer } from '~/app';

import { commentMock0, userMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';

import { userApi } from '~/entities/user';

import { convertDateToLocalString, makeStore } from '~/shared/lib';

import { Author } from './CommentAuthor';

describe('<CommentAuthor />', () => {
  const store = makeStore(rootReducer);

  beforeEach(async () => {
    store.dispatch(userApi.endpoints.getUsers.initiate());
  });

  it('should render user first and last name', async () => {
    render(<Author comment={commentMock0} />, {
      store,
    });

    await waitFor(() => {
      expect(screen.getByText(userMock0.fullName)).toBeInTheDocument();
    });
  });

  it('should render publication date', async () => {
    render(<Author comment={commentMock0} />, {
      store,
    });

    await waitFor(() => {
      expect(
        screen.getByText(convertDateToLocalString(commentMock0.date)),
      ).toBeInTheDocument();
    });
  });
});
