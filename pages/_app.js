import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from './../lib/gtag';
import Analytics from './../components/analytics';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const FB_PIXEL = process.env.PIXEL_FB;

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(async () => {
    const { default: ReactPixel } = await import('react-facebook-pixel');
    ReactPixel.init(FB_PIXEL, null, {
        autoConfig: true,
        debug: true,
      });
    ReactPixel.pageView();
    ReactPixel.track("ViewContent")
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster position="bottom-right" />
        <Component {...pageProps} />    
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default MyApp
