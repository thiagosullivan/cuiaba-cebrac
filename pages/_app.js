import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import * as gtag from './../lib/gtag';
// import Analytics from './../components/analytics';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  // const FB_PIXEL = process.env.PIXEL_FB;

  // useEffect(() => {
  //   const handleRouteChange = url => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  // useEffect(async () => {
  //   const { default: ReactPixel } = await import('react-facebook-pixel');
  //   ReactPixel.init(FB_PIXEL, null, {
  //       autoConfig: true,
  //       debug: true,
  //     });
  //   ReactPixel.pageView();
  //   ReactPixel.track("ViewContent")
  // });

  return (
    <>
      <Script id="facebook-pixel">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '557013655243129');
          fbq('track', 'PageView');
        `}
      </Script>
      <script async src=""></script>
      <Script
        strategy='lazyOnload'
        id='GA-scriptOne'
        src={`https://www.googletagmanager.com/gtag/js?id=AW-643544744`}
      />
      <Script
        strategy='lazyOnload'
        id='GA-scriptTwo'
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'AW-643544744');
        `}
      </Script>
      <ThemeProvider theme={theme}>
        <Toaster position="bottom-right" />
        <Component {...pageProps} />    
      </ThemeProvider>
      {/* <Analytics /> */}
    </>
  )
}

export default MyApp
