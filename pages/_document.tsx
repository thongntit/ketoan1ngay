import { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheetDocument } from 'next-sanity/studio'

import FAB from '../components/FAB'

export default class Document extends ServerStyleSheetDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <FAB />
        </body>
      </Html>
    )
  }
}
