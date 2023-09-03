import Alert from './alert'
import FAB from './FAB'
import Meta from './meta'
import NavBar from './NavBar'

export default function Layout({ preview, children, navSettings }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {preview && <Alert preview={preview} />}
        <NavBar items={navSettings} />
        <main>{children}</main>
        <FAB />
      </div>
    </>
  )
}
