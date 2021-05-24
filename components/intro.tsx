import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'

const Intro = () => {
  return (
    <section className="flex-col flex items-center mx-auto">
      <img
        src="/images/profile.jpg"
        className="rounded-full max-w-md shadow-md"
        height="max-h"
        width="max-w"
        alt="Kevin"
      ></img>
      <h2 className="text-center text-xl text-gray-500 mt-5 max-w-xl">
        Hi, my name is Kevin. I spend my time making the world a better place
        with thoughtful products and design.
      </h2>
    </section>
  );
}

export default Intro
