import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'

// Working with fonts in Next.js/Tailwind:  https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <Component {...pageProps} />

      </main>
    </>
  )
}
