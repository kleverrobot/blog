import Footer from './footer'
import Header from './header'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({children }: Props) => {
  return (
    <>
     <Header />
      <div className="py-8 bg-lavender bg-opacity-50">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
