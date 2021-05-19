import Document, { Head, Html, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);

    return initialProps;
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta
            content="Quase antes de sabermos disso, havíamos deixado o chão."
            name="description"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
