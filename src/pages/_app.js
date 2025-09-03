import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import { Lato } from 'next/font/google';
import Head from 'next/head';

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: '300',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Grace Caballero Design</title>
        <meta name="description" content="Grace Caballero Design" />
      </Head>
      <body className={`${lato.variable}`}>
        <Navbar />
        <Component {...pageProps} />
      </body>
    </>
  );
}
