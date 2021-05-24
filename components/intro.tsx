import Image from 'next/image'

const Intro = () => {
  return (
    <section className="flex-col flex items-center mx-auto">
      <Image
        src="/images/profile_2.png"
        className="rounded-full max-w-md shadow-md"
        height={500}
        width={500}
        alt="Kevin Profile Picture"
      ></Image>
      <h2 className="font-mono text-center text-2xl text-space-light mt-5 max-w-2xl">
        I'm an entreprenuer, product leader and musician with a knack for solving complex problems. 
      </h2>
    </section>
  );
}

export default Intro
