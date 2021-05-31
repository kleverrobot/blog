import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-space-dark via-space to-space-light text-lavender">
      <h1 className="pt-4 mx-auto text-center">
        <Link href="/">
          <a className="hover:text-babyblue hover:underline">Kevin Legere</a>
        </Link>
      </h1>
      <nav className="flex flex-col items-center p-4">
        <h3 className="space-x-8">
          <Link href="/blog">
            <a className="hover:text-babyblue hover:underline">Blog</a>
          </Link>
          <Link href="/work">
            <a className="hover:text-babyblue hover:underline">Work</a>
          </Link>
        </h3>
      </nav>
    </div>
  );
};

export default Header;
