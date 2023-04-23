import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        
        {/* Prevents flash of unstyled content (FOUC) on page load, i.e. style is set to dark but it takes a second to apply the theme */}
        <Script id="theme-switcher">
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
