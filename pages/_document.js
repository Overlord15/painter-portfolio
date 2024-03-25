import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Rohit Painter</title>
        <link rel="apple-touch-icon" href="paint.png" />
        <link rel="icon" href="paint.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
