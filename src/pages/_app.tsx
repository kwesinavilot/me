// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { AppProps } from 'next/app';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    main: [
      "#107869",
      "#1D741B",
      "#008040",
      "#008B45",
      "#00B58C",
      "#18A558",
      "#008b8b",
      "#F0FFFF",
      "#0b5d1e",
      "#FFFFFF",
    ]
  },

  primaryColor: "main",
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}