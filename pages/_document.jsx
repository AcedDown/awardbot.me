import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <script src="/sw.js" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="By creating advanced giveaways with Lunyx, you can improve your social media accounts and gain an organic lift!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Lunyx" />
          <meta name="twitter:creator" content="@Lunyx" />
          <meta property="og:url" content="https://www.lunyx.me" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Lunyx | Future of Giveaways" />
          <link
            rel="icon"
            href="https://lunyx.me/img/logo.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="By creating advanced giveaways with Lunyx, you can improve your social media accounts and gain an organic lift!"
          />
          <meta property="og:image" content="https://lunyx.me/img/logo.png" />
          <meta property="og:image:alt" content="Lunyx" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Lunyx | Future of Giveaways"
          />
          <meta name="theme-color" content="#ea822d" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-1QW9V8QV4P"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-1QW9V8QV4P');
              `,
            }}
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

export default MyDocument;
