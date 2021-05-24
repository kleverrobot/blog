import Image from "next/image";

type Props = {
  title: string;
  logo: string;
  tagline: string;
  excerpt: string;
};

const ProductPreview = ({ title, tagline, logo, excerpt }: Props) => {
  return (
    <section className="space-y-8">
      <div className="container bg-white mx-auto shadow-md rounded-lg p-4">
        <div className="flex items-center">
          <Image src={logo} height={75} width={75} className=""></Image>
          <div className="px-8">
            <h4 className="text-4xl text-space font-bold">{title}</h4>
            <p className="italic font-extralight">{tagline}</p>
          </div>
        </div>

        <p className="text-lg text-space leading-relaxed mt-4">{excerpt}</p>
      </div>
    </section>
  );
};

export default ProductPreview;
