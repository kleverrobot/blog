import Container from "./container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-babyblue bg-opacity-50 border-t border-babyblue">
      <Container>
        <div className="py-4 flex flex-col items-center text-space-dark">
          <h2 className="text-center mb-4">
            Contact or follow me
          </h2>
          <div className="flex-cols-2 flex space-x-8">
            <a
              href="https://twitter.com/KevinGLegere"
              target="_blank"
              className="hover:opacity-60"
            >
              <Image
                src="/favicon/twitter_icon.png"
                height={40}
                width={40}
              ></Image>
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-legere-a75b725a/"
              target="_blank"
              className="hover:opacity-60"
            >
              <Image
                src="/favicon/linkedin-icon.png"
                height={40}
                width={40}
              ></Image>
            </a>
          </div>
          <p className="mt-4 p-2 text-space-light font-extralight rounded-xl text-center">
            This site was made by me using{" "}
            <a href="https://nextjs.org/" target="_blank" className="underline">
              next.js
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="underline"
            >
              tailwind
            </a>{" "}
            and{" "}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="underline"
            >
              typescript
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
