import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/** Material Icons  */}
          <link
            rel="stylesheet"
            href="//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css"
          />
          {/** animate css */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
          />
           {/** Google verification Token */}
           <meta name="google-site-verification" content="hf-ex9RKSMnDDHWbcDD1WKC6-VL5-Fb-3v2lFze300g" />
           {/** Title */}
           <title>Bamboo - Barranquilla</title>
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
