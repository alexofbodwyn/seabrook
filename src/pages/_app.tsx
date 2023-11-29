import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, {useEffect} from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    // Check if the current domain is seabrookfinance.co.uk
    if (window.location.hostname === 'seabrookfinance.co.uk') {
      // Redirect to seabrookfinance.com
      window.location.replace('https://seabrookfinance.com' + router.asPath);
    }
  }, []);
  return <Component {...pageProps} />
}
