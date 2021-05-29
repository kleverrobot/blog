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
      <div className="container p-4 mx-auto bg-white rounded-lg shadow-md">
        <div className="flex items-center">
          <Image src={logo} height={50} width={50} className=""></Image>
          <div className="px-4">
            <h4 className="text-2xl font-bold text-space">{title}</h4>
            <p className="italic font-extralight">{tagline}</p>
          </div>
        </div>

        <p className="mt-4 text-lg leading-relaxed text-space">{excerpt}</p>
      </div>
    </section>
  );
};

export default ProductPreview;
