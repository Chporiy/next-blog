import { GetServerSidePropsResult, Redirect } from 'next';

import { userModel } from '~/entities/user';

import { ROUTES } from '~/shared/config';
import { AppStore } from '~/shared/lib';

/**
 * AuthGuard model
 *
 * @public
 */
class AuthGuard {
  private store: AppStore;

  /**
   * Constructor of the AuthGuard class
   *
   * @param {AppStore} store - global storage
   */
  constructor(store: AppStore) {
    this.store = store;
  }

  /**
   * @returns {GetServerSidePropsResult<object>} - Server Side Props Result
   */
  checkAccessToThePage(): GetServerSidePropsResult<object> {
    if (!this.isAccessTokenDefined()) {
      return AuthGuard.getRedirectObject();
    }

    return AuthGuard.getEmptyPropsObject();
  }

  private isAccessTokenDefined(): boolean {
    return !!userModel.selectors.selectAccessToken(this.store.getState());
  }

  private static getRedirectObject(): { redirect: Redirect } {
    return {
      redirect: {
        destination: ROUTES.auth.signIn,
        permanent: false,
      },
    };
  }

  private static getEmptyPropsObject() {
    return { props: {} };
  }
}

export { AuthGuard };
