import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ฟอนต์ */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* ข้อมูล SEO + Favicon */}
        <title>กรอกข้อมูลนักศึกษา</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Fan My - Your Fan Page Solution" />
        <link rel="icon" href="/img/image.png" />
      </Head>
      
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
