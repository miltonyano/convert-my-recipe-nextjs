import AppProvider from '@/hooks';

import Header from '@/components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from "@/styles/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </AppProvider>
  );
}
