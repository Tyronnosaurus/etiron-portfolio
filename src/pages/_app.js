import '@/styles/globals.css'
import {Montserrat} from "next/font/google"

// Working with fonts in Next.js/Tailwind:  https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})


export default function App({ Component, pageProps }) {
  return(
    <main className={`${montserrat.variable} font-mont`}>
      <Component {...pageProps} />

    </main>
  )
}
