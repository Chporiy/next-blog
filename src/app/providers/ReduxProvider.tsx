import { Provider, ProviderProps } from 'react-redux';

export const ReduxProvoder = ({
  children,
  ...providerProps
}: ProviderProps) => <Provider {...providerProps}>{children}</Provider>;
