import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div className=" min-h-screen items-center justify-center py-2">
      <Head>
        <title>VitaReels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="">
        <p>main</p>
      </main>

      <footer className="">
        <p>footer</p>
      </footer>
    </div>
  )
}

export default Home
