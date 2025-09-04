import '@/styles/globals.css';
import { Lato, Montserrat } from 'next/font/google';
import Head from 'next/head';

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
        {/* <Navbar /> */}
        <div className="flex justify-center items-center bg-off-white pt-10">
          <img src="gcd-logo.svg" className="w-60 sm:w-80 md:w-100" />
        </div>
        <Component {...pageProps} />
      </body>
    </>
  );
}
