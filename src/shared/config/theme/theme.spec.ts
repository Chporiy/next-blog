import { theme as defaultTheme } from '@chakra-ui/react';

import { theme } from './theme';

describe('theme', () => {
  it('should override global styles', () => {
    expect(theme).toEqual({
      ...defaultTheme,
      styles: {
        global: {
          ...defaultTheme.styles.global,
          'html, body': {
            bg: '#f5f5f5',
          },
        },
      },
    });
  });
});
