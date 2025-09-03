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
        {/* <Navbar /> */}
        <div className="flex justify-center items-center bg-off-white pt-10">
          <img src="gcd-logo.svg" className="w-60 sm:w-100 md:w-130" />
        </div>
        <Component {...pageProps} />
      </body>
    </>
  );
}
