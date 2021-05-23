import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'

const Intro = () => {
  return (
    <section className="flex-col flex items-center mt-16 mb-16">
      <Image
        priority
        src="/images/profile.jpg"
        className="rounded-full"
        height={144}
        width={144}
        alt="Kevin"
      />
      <h1 className="text-6xl font-bold tracking-tighter leading-tight pt-4">
        Kevin Legere
      </h1>
      <h4 className="text-center text-lg text-gray-500 mt-5">
        Improving people's lives with thoughtful products and design.
      </h4>
    </section>
  );
}

export default Intro
