import Container from "./container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-opacity-50 border-t bg-babyblue border-babyblue">
      <Container>
        <div className="flex flex-col items-center py-4 text-space-dark">
          <h3 className="mb-4 text-center">Contact or follow me</h3>
          <div className="flex space-x-8 flex-cols-2">
            <a
              href="https://twitter.com/KevinGLegere"
              target="_blank"
              className="hover:opacity-60"
            >
              <Image
                src="/favicon/twitter_icon.png"
                height={35}
                width={35}
              ></Image>
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-legere-a75b725a/"
              target="_blank"
              className="hover:opacity-60"
            >
              <Image
                src="/favicon/linkedin-icon.png"
                height={35}
                width={35}
              ></Image>
            </a>
          </div>
          <p className="p-2 mt-2 text-center text-space-light font-extralight rounded-xl">
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
