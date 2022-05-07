import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            WaffleSwap
          </a>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className="mt-6 w-96 space-y-3 rounded-xl border p-6 text-left">
            <h3 className="text-2xl font-bold">Swap &rarr;</h3>
            <input
              className="rounded-xl border bg-gray-50 p-4 text-xl text-white hover:bg-gray-100"
              placeholder="0.0 Coin1"
            />
            <input
              className="rounded-xl border bg-gray-50 p-4 text-xl text-white hover:bg-gray-100"
              placeholder="0.0 Coin2"
            />
            <div className="hover:click-cursor rounded-xl border bg-blue-300 p-4 text-center text-xl text-white hover:bg-blue-400">
              Connect Wallet
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
