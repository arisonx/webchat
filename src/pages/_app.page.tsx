import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
      <SessionProvider session={session}>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </SessionProvider>
  );
}
