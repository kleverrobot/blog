import Image from 'next/image'

const Intro = () => {
  return (
    <section className="flex-col flex items-center mx-auto">
      <Image
        src="/images/profile_2.png"
        className="rounded-full max-w-md shadow-md"
        height={500}
        width={500}
        alt="Kevin Profile"
      ></Image>
      <h3 className="text-2xl text-center text-space mt-5 max-w-2xl">
        I'm an entreprenuer, product leader and musician with a passion for solving complex problems. 
      </h3>
    </section>
  );
}

export default Intro