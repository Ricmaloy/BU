import type { AppProps } from 'next/app';
import { AuthContextProvider } from '~/contexts/AuthContext';
import 'styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
