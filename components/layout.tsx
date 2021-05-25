import Footer from './footer'
import Header from './header'
import Head from "next/head"
import { motion } from "framer-motion"

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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <main>{children}</main>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Layout
