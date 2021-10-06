import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container h-full w-full mx-auto p-10">
      <Head>
        <title>Movie Demo</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center flex-col items-center gap-8">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
