import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Skills from '../components/skill/index';
import Actions from '../components/actions/Actions';
import Action from '../components/actions/Action';

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

      <Actions />
    

      <section className="bg-[#101010] md:border-solid border-y-2 md:border-gray-500/50 ">
        <div className="grid grid-cols-1 pl-10 md:pl-0 md:grid-cols-2 items-center 2xl:mx-60 2xl:my-16">
          <div className="max-w-[624px]">
            <h4 className="text-[#00A3FF] font-bold text-[64px]">VitaReels</h4>
            <p className="text-[#404040] line-clamp-3 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum."
            </p>
            <a
              href="#"
              className="py-5 px-10 rounded-full flex gap-x-3 items-center"
            >
              <p className="text-white text-base font-extrabold">Know more</p>{' '}
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

          <div className="flex flex-col md:border-solid md:border-l-2 md:border-gray-500/50">
            <div className="flex gap-4 pl-10 text-white md:border-solid md:border-b-2 md:border-gray-500/50 max-w-[624px] pb-10">
              <div>hr</div>
              <div>
                <h4>Industries we serve</h4>
                <p>Tech, Blockchain, Fintech, E-Commerce Web2 and Web3</p>
              </div>
            </div>
            <div className="flex gap-4 pl-10 text-white pt-10">
              <div>hr</div>
              <div>
                <h4>Who can join?</h4>
                <p>Competent Web3/tech talents/creatives and top recruiters</p>
              </div>
            </div>
          </div>
        </div>
        <div>{/* <Actions/> */}</div>
      </section>

      <footer className="">
        <p>footer</p>
      </footer>
    </div>
  );
};

export default Home;
