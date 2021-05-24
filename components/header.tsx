import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-space-dark via-space to-space-light text-lavender font-mono ">
      <h1 className="text-7xl text-center font-extrabold tracking-tighter leading-tight mx-auto pt-4">
        <Link href="/">
          <a className="hover:text-babyblue hover:underline">Kevin Legere</a>
        </Link>
      </h1>
      <nav className="flex flex-col items-center text-2xl flex-wrap p-4">
        <div className="">
          <div className="space-x-8">
            <Link href="/">
              <a className="hover:text-babyblue hover:underline">About</a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-babyblue hover:underline">Blog</a>
            </Link>
            <Link href="/work">
              <a className="hover:text-babyblue hover:underline">My Work</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header
