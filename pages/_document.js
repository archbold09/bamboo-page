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
           {/** Title */}
           <title>Bambo - Barranquilla</title>
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
