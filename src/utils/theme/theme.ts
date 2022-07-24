import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: '#f5f5f5',
      },
    },
  },
});

export default theme;
