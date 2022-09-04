import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Skills from '../components/skill/index';
import Action from '../components/Action';


const Home: NextPage = () => {


  return (
    <div className="bg-black">
      <Head>
        <title>VitaReels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className="bg-black flex justify-center">
        <section className="h-screen text-white w-full mx-10 md:mx-20 2xl:mx-36 flex flex-col justify-center gap-y-10">
          <div className="">
            <p className="text-[80px] font-extrabold">Connecting Competent</p>
            <p className="text-[80px] font-extrabold">tech and web3 talents</p>
            <p className="text-6xl font-normal">
              to the best recruiter in reels.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <a href="#" className="bg-blue-500 py-5 px-16 rounded-full">
              <p className="text-base font-extrabold">Hire a Talent</p>
            </a>

            <a
              href="#"
              className="bg-black py-5 px-10 rounded-full flex gap-x-3 items-center"
            >
              <p className="text-base font-extrabold">Become a Talent</p>{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
      <section>
        <Skills />
      </section>

      <section className='flex flex-wrap md:flex justify-center items-center md:justify-between mx-10 md:mx-20 2xl:mx-36'>
        <Action />
        <Action />
        <Action />
        <Action />
      </section>
      

      <footer className="">
        <p>footer</p>
      </footer>
    </div>
  );
};

export default Home;
