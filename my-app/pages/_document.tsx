import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/components/NavBar";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com/" />
    <link href="https://fonts.googleapis.com" />

    <link href="https://fonts.gstatic.com" />

    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />
      </Head>
      <body>
        <NavBar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
