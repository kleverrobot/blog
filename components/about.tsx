import Image from "next/image";

interface Props {
  title: string;
  text: string;
  imgSrc: string;
}

export const AboutCard = (props: Props) => {
  return (
    <div className="w-full mt-20 mb-8">
      <div className="relative w-full max-w-4xl mx-auto ">
        <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-lavender to-babyblue shadow-lg transform skew-y-0 rotate-3 rounded-3xl"></div>
        <div className="relative bg-white shadow-lg rounded-3xl">
          <div className="px-12 py-8">
            <div className="mt-8 text-center">
              <div className="mb-8 text-4xl font-medium leading-none text-space-dark">
                {props.title}
              </div>
              <Image
                src={props.imgSrc}
                height={600}
                width={800}
                alt={props.title}
                className="overflow-hidden rounded-2xl"
              />
              <div className="mt-6 text-xl antialiased font-light text-true-gray-500">
                {props.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };