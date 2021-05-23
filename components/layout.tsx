import Footer from './footer'
import Header from './header'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
     <Header />
      <div className="py-8">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
