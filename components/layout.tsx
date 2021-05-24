import Footer from './footer'
import Header from './header'
import Head from "next/head"

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({children }: Props) => {
  return (
    <>
      <Header />
      <div className="py-8 bg-lavender bg-opacity-50">
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout
