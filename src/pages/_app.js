import StoreProvider from '../utils/store/Store';
import GlobalStyle from '../styles/globals';



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StoreProvider>
          <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}
