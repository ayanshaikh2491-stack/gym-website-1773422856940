import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Gym Website</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;