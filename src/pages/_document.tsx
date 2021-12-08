import { ColorModeScript } from '@chakra-ui/color-mode';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import theme from '../styles/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap'
            rel='stylesheet'
            crossOrigin='true'
          />
        </Head>

        <ColorModeScript initialColorMode={theme.initialColorMode} />
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
