import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-space-dark via-space to-space-light text-lavender">
      <h1 className="text-center mx-auto pt-4">
        <Link href="/">
          <a className="hover:text-babyblue hover:underline">Kevin Legere</a>
        </Link>
      </h1>
      <nav className="flex flex-col items-center p-4">
        <h2 className="space-x-8">
          <Link href="/blog">
            <a className="hover:text-babyblue hover:underline">Blog</a>
          </Link>
          <Link href="/projects">
            <a className="hover:text-babyblue hover:underline">Projects</a>
          </Link>
        </h2>
      </nav>
    </div>
  );
};

export default Header;
