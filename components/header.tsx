import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-accent-1 border-b border-accent-2 text-indigo-900">
      <h1 className="text-7xl text-center font-bold tracking-tighter leading-tight mx-auto pt-4">
        <Link href="/">
          <a className="hover:underline">Kevin Legere</a>
        </Link>
      </h1>
      <nav className="flex flex-col items-center text-xl flex-wrap p-4">
        <div className="">
          <div className="space-x-8">
            <Link href="/about">
              <a className="hover:underline">About</a>
            </Link>
            <Link href="/blog">
              <a className="hover:underline">Blog</a>
            </Link>
            <Link href="/work">
              <a className="hover:underline">My Work</a>
            </Link>
            <Link href="/conact">
              <a className="hover:underline">Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header
