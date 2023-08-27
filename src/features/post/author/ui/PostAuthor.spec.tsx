import { rootReducer } from '~/app';

import { postMock0, userMock0 } from '~/tests/mocks';
import { render, screen, waitFor } from '~/tests/utils';

import { userApi } from '~/entities/user';

import { convertDateToLocalDate, makeStore } from '~/shared/lib';

import { Author } from './PostAuthor';

describe('<PostAuthor />', () => {
  const store = makeStore(rootReducer);

  beforeEach(async () => {
    store.dispatch(userApi.endpoints.getUsers.initiate());
  });

  it('should render user first and last name', async () => {
    render(<Author post={postMock0} />, {
      store,
    });

    await waitFor(() => {
      expect(screen.getByText(userMock0.fullName)).toBeInTheDocument();
    });
  });

  it('should render publication date', async () => {
    render(<Author post={postMock0} />, {
      store,
    });

    await waitFor(() => {
      expect(
        screen.getByText(convertDateToLocalDate(postMock0.date)),
      ).toBeInTheDocument();
    });
  });
});
