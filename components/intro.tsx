import Image from 'next/image'

const Intro = () => {
  return (
    <section className="flex flex-col items-center mx-auto">
      <Image
        src="/images/profile.png"
        className="max-w-md rounded-full shadow-md"
        height={500}
        width={500}
        alt="Kevin Profile"
      ></Image>
      <h3 className="max-w-2xl mt-5 text-2xl text-center text-space">
        I'm an entrepreneur, product leader and artist with a passion for solving complex problems. 
      </h3>
    </section>
  );
}

export default Intro