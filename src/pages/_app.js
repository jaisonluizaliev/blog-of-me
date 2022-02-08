import { ThemeProvider } from 'styled-components';
import StoreProvider from '../utils/store/Store';
import GlobalStyle from '../styles/globals';

const theme = {
  colors: {
    primary: '#000',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}
