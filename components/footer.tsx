import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-12 flex flex-col items-center">
          <h3 className="text-4xl font-bold tracking-tighter leading-tight text-center mb-10">
            Follow me.
          </h3>
          <div className="">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 duration-200 transition-colors mb-6"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
