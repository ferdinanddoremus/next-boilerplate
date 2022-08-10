import type { NextPage } from 'next'
import Head from 'next/head'

import { BeakerIcon as BreakerIconSolid } from '@heroicons/react/solid'
import { BeakerIcon as BreakerIconOutline } from '@heroicons/react/outline'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ferdinand Dorémus | Grorémus</title>
        <meta name="description" content="Ferdinand Dorémus website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <div className="md:grid grid-cols-2 gap-4">
          <div className="pt-10">
            <div className="flex mb-6">
              <BreakerIconSolid className="h-10 w-10" />
              <BreakerIconOutline className="h-10 w-10" />
            </div>
            <h1 className="font-bold text-4xl">
              Boilerplate
            </h1>
            <h2 className="text-lg mt-4 text-slate-500">
              I’m a frontend engineer mainly focused on delivering amazing experience to users, building great products and using JavaScript, React and React Native.
            </h2>
            <p className="text-lg mt-2 text-slate-500">
              I&apos;m currently looking for my next role. Contact me if you want to work together !
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
