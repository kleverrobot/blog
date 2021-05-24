import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-accent-1 border-b border-accent-2 text-gray-800">
      <h1 className="text-7xl text-center font-bold tracking-tighter leading-tight mx-auto pt-4">
        <Link href="/">
          <a className="hover:text-gray-900 hover:underline">Kevin Legere</a>
        </Link>
      </h1>
      <nav className="flex flex-col items-center text-xl flex-wrap p-4">
        <div className="">
          <div className="space-x-8">
            <Link href="/">
              <a className="hover:text-gray-900 hover:underline">About</a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-gray-900 hover:underline">Blog</a>
            </Link>
            <Link href="/work">
              <a className="hover:text-gray-900 hover:underline">My Work</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-gray-900 hover:underline">Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header
