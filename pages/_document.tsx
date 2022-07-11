import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

if (process.env.NEXT_MANUAL_SIG_HANDLE) {
  process
    .on('SIGTERM', shutdown('SIGTERM'))
    .on('SIGINT', shutdown('SIGINT'))
    .on('uncaughtException', shutdown('uncaughtException'));
}

function shutdown(signal: string) {
  return (err: any) => {
    console.log(`Received ${ signal }: cleaning up`);
    if (err) console.error(err.stack || err);
    process.exit(err ? 1 : 0);
  };
}