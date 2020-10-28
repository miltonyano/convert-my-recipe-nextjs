import AppProvider from '@/hooks';


import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from "@/styles/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  );
}
