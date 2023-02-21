import Alert from './alert'
import FAB from './FAB'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {preview && <Alert preview={preview} />}
        <main>{children}</main>
        <FAB />
      </div>
    </>
  )
}
