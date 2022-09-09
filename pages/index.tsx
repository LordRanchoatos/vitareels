import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Skills from '../components/skill/index';
import Actions from '../components/actions/Actions';
import Carousel from '../components/carousel/Carousel.js';

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>VitaReels</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <meta name="description" content="connecting web3 talents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className="bg-black flex justify-center items-center h-[600px] md:h-[1052px]">
        <section className="h-[90%] text-white w-full mx-5 md:mx-20 2xl:mx-36 flex flex-col justify-center gap-y-5 md:gap-y-10">
          <div className="xs:text-center sm:text-center md:text-start">
            <p className="lg:text-[80px] md:text-6xl text-2xl font-extrabold">Connecting Competent</p>
            <p className="lg:text-[80px] md:text-6xl text-2xl font-extrabold">
              tech and web3 <span className="text-[#00A3FF]">talents</span>
            </p>
            <p className="md:text-6xl  font-normal sm:text-xl">
              to the best recruiter in reels.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <a href="#" className="bg-blue-500 py-2 md:py-5 px-5 md:px-16 rounded-full text-center w-[50%] md:w-auto">
              <p className="text-sm md:text-base font-bold md:font-extrabold">Hire a Talent</p>
            </a>

            <a
              href="#"
              className="bg-black py-2 md:py-5 px-5 md:px-10 rounded-full flex gap-x-3 text-center w-[70%]"
            >
              <p className="text-sm md:text-base font-bold md:font-extrabold ">Become a Talent</p>{' '}
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

      <Carousel />

      <Actions />

      <section className="bg-[#101010] md:border-solid border-y-2 md:border-gray-500/50 ">
        <div className="grid grid-cols-1 ml-10 md:pl-0 md:grid-cols-2 items-center 2xl:mx-60 2xl:my-16">
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
              className="py-5 px-0 rounded-full flex gap-x-3 items-center"
            >
              <p className="text-white text-base font-extrabold">Know more</p>{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-white"
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
            <div className="flex gap-4 ml-10 text-white md:border-solid md:border-b-2 md:border-gray-500/50 max-w-[624px] pb-10">
              <div>
                <Image
                  height={60}
                  width={60}
                  className="h-8 w-8"
                  src="/industries.svg"
                  alt="icon"
                />
              </div>
              <div>
                <h4 className="font-bold text-xl">Industries we serve</h4>
                <p className="text-base text-[#8F8F8F]">
                  Tech, Blockchain, Fintech, E-Commerce Web2 and Web3
                </p>
              </div>
            </div>
            <div className="flex gap-4 pl-10 text-white pt-10">
              <div>
                <Image
                  height={60}
                  width={60}
                  className="h-8 w-8"
                  src="/join.svg"
                  alt="iccon"
                />
              </div>
              <div>
                <h4 className="font-bold text-xl">Who can join?</h4>
                <p className="text-base text-[#8F8F8F]">
                  Competent Web3/tech talents/creatives and top recruiters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-5 2xl:ml-60 2xl:my-16 items-center h-['3000px']">
          <div className="text-white col-span-2">
            <div>
              <h3 className="font-extrabold text-[64px]">Checkout Our Top</h3>
              <h3 className="font-extrabold text-[64px]">
                Skills and <span className="text-[#00A3FF]">Hire!</span>
              </h3>
              <p className="text-xl text-[#404040]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum."
              </p>
            </div>

            <div className="mt-10 bg-blue-500 py-5 px-16 rounded-full">
              <p className="text-base font-extrabold ">Hire a Talent</p>
            </div>
          </div>
          <div className="h-[1000px] col-span-3 hidden md:grid pt-[-10] overflow-hidden">
            <div className="h-[100%] w-auto hidden md:block bg-[url('/Frame.svg')] bg-no-repeat bg-cover"></div>
          </div>
        </div>
      </section>

      <section className="h-[455px] 2xl:mx-60 2xl:my-16 bg-gradient-to-r from-[#AFFCAE] to-[#00A3FF] grid grid-cols-1 md:grid-cols-8 rounded-2xl justify-center">
        <div className="col-span-3 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="pl-10">
              <p className="text-7xl font-bold text-white">Show your </p>
              <p className="text-7xl font-bold text-white">Skill through</p>
              <p className="text-7xl font-bold text-white">Reels</p>
            </div>
            <div className=" mt-10 bg-blue-500 py-5 px-16 rounded-full w-[187px]">
              <p className="text-base font-extrabold ">Hire a Talent</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block h-[100%] w-full col-span-5 md:bg-[url('/reel.svg')] bg-cover"></div>
      </section>

      <section className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <div className="text-white w-[506px]">
            <div className="flex">
              <div>pI</div>
              <div>
                <p>Awoosika Isreal</p>
                <p>Founder & CEO Web3bridge</p>
              </div>
            </div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                error delectus iure veniam dolorum dignissimos vel. Dolorem iste
                cupiditate magni inventore vel quam, quidem quasi consequatur
                sit dolores placeat minus sapiente ipsa ea! Voluptates,
                praesentium vel? Quia inventore nobis, odio, suscipit molestiae,
                eius iusto fugiat nostrum sequi necessitatibus aut fuga!
              </p>
              <p>stars</p>
            </div>
          </div>
          <div className="text-white w-[506px]">
            <div className="flex">
              <div>pI</div>
              <div>
                <p>Awoosika Isreal</p>
                <p>Founder & CEO Web3bridge</p>
              </div>
            </div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                error delectus iure veniam dolorum dignissimos vel. Dolorem iste
                cupiditate magni inventore vel quam, quidem quasi consequatur
                sit dolores placeat minus sapiente ipsa ea! Voluptates,
                praesentium vel? Quia inventore nobis, odio, suscipit molestiae,
                eius iusto fugiat nostrum sequi necessitatibus aut fuga!
              </p>
              <p>stars</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black mb-20">
        <div className="bg-white grid grid-cols-1 md:grid-cols-3 md:rounded-t-[100px] ">
          <div className="flex-shrink-0 pr-5 md:px-10 text-white items-center my-10 mx-10 md:mx-20">
            <Image
              height={60}
              width={150}
              className="h-8 w-8"
              src="/logo2.svg"
              alt="vitalogo"
            />
            <p className="text-xl text-[#404040]">
              Connecting competent tech and web3 talents to the best recruiters.
            </p>
          </div>
          <div className="flex flex-col items-center my-10">
            <div className="flex flex-col gap-y-5 text-xl text-[#404040]">
              <p className="font-bold text-xl text-black">Quick Links</p>
              <p>Discord</p>
              <p>Twitter</p>
              <p>About VitaReel</p>
              <p>Careers at VitaReels</p>
              <p>Blog</p>
              <p>Brand Assets</p>
            </div>
          </div>
          <div className="flex flex-col items-center my-10">
            <div className="flex flex-col gap-y-5">
              <p className="text-extrabold text-5xl">Join Our</p>
              <p className="text-[#00A3FF] text-extrabold text-5xl">
                Newsletter
              </p>
              <p className="text-xl text-[#404040]">
                Subscribe to receive industry updates about jobs and
                opportunities.
              </p>
              <div className="flex flex-col gap-y-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-[#E9E9E9] text-xl px-5 rounded-xl h-16"
                />
                <input
                  type="submit"
                  className="text-white bg-black text-xl px-5 rounded-xl h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
