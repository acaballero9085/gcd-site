import '@/styles/globals.css';
import { Lato, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Link from 'next/link';

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: '300',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['200', '300'],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Grace Caballero Design</title>
        <meta name="description" content="Grace Caballero Design" />
      </Head>
      <body className={`${lato.variable} ${montserrat.variable}`}>
        <Link href="/">
          <div className="flex justify-center items-center bg-off-white pt-4">
            <img src="gcd-logo.svg" className="w-40 sm:w-60 md:w-80" />
          </div>
        </Link>
        <Navbar />
        <Component {...pageProps} />
      </body>
    </>
  );
}
