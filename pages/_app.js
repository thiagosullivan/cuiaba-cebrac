import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const FB_PIXEL_ID = process.env.REFRESH_TOKEN;

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(FB_PIXEL_ID) // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  return (
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />    
    </ThemeProvider>
  )
}

export default MyApp
