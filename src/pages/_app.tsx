import { AppProps } from 'next/app';
import Layout from '../layout/layout';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          colors: {
            main: [
              "#107869", //This is a light blue color that could be used for images or other background elements on your website.
              "#1D741B", //This is a dark green color that could be used for borders or other decorative elements on your website.
              "#008040", //This is a dark brown color that could be used for footers or other less important elements on your website.
              "#008B45", //This is a dark orange color that could be used for accents or other attention-grabbing elements on your website.
              "#00B58C", //This is a dark green color that could be used for borders or other decorative elements on your website.
              "#18A558", //This is a green color that could be used for buttons or other interactive elements on your website.
              "#008b8b", //This is a light blue color that could be used for the text on your website or icons.
              "#F0FFFF", //This is light blueish-green, used for partners section on homepage.
              "#0b5d1e",
              "#FFFFFF", //This is white, used that default background for most of the site.
            ]
          },

          primaryColor: "main",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}