import Container from './container'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-babyblue bg-opacity-50 border-t border-babyblue">
      <Container>
        <div className="py-12 flex flex-col items-center text-space-dark">
          <a href="https://twitter.com/KevinGLegere" target="_blank">
            <h3 className="text-4xl hover:underline hover:opacity-80 font-bold tracking-tighter leading-tight text-center mb-4">
              Follow me on twitter for nonsense.
            </h3>
          </a>
          <h4>Made with love using next.js, tailwind and typescript</h4>
        </div>
      </Container>
    </footer>
  );
}

export default Footer
