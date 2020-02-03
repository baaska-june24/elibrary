// tslint:disable import-name
import Document, {
  Head,
  Main,
  NextScript
  // DocumentContext
} from "next/document";

export default class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }
  render() {
    return (
      <html lang="mn">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `if ('serviceWorker' in navigator) {
                console.log('ServiceWorker detected. Try to unregister them!');
              navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for (let registration of registrations) {
                  registration.unregister();
                }
              });
            } else {console.log('ServiceWorker not detected.');}`
            }}
          />
        </body>
      </html>
    );
  }
}
