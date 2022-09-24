import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Skills from '../components/skill/index';
import Actions from '../components/actions/Actions';
import Carousel from '../components/carousel/Carousel.js';
import { RiStarFill } from 'react-icons/ri';

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>VitaReels</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        {/* <meta name="description" content="connecting web3 talents" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className="bg-black flex h-[600px] md:h-[1052px]">
        <section className="h-[90%] text-white w-full mx-5 md:mx-20 2xl:mx-36 flex flex-col justify-center items-center md:items-start gap-y-5 md:gap-y-10">
          <div className="xs:text-center sm:text-center md:text-start">
            <p className="lg:text-[80px] md:text-6xl text-3xl leading-10 font-extrabold text-center md:text-start">
              Connecting Competent
            </p>
            <p className="lg:text-[80px] md:text-6xl text-3xl leading-10 font-extrabold text-center md:text-start">
              tech and web3 <span className="text-[#00A3FF]">talents</span>
            </p>
            <p className="md:text-6xl  font-normal sm:text-xl text-center md:text-start">
              to the best recruiter in reels.
            </p>
          </div>
          <div className="flex flex-col md:flex-row sm:justify-center md:justify-start sm:items-center md:items-start gap-2">
            <a
              href="#"
              className="bg-blue-500 py-2 md:py-5 px-5 md:px-16 rounded-full text-center "
            >
              <p className="text-sm md:text-base font-bold md:font-extrabold">
                Hire a Talent
              </p>
            </a>

            <a
              href="#"
              className="bg-black py-2 md:py-5 px-5 md:px-10 rounded-full flex justify-center  items-center gap-x-3 text-center "
            >
              <p className="text-sm md:text-base font-bold md:font-extrabold ">
                Become a Talent
              </p>{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-3 h-3 md:w-5 md:h-5"
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
      <section className="overflow-hidden">
        <Skills />
      </section>

      <Carousel />

      <Actions />

      <section className="bg-[#101010] md:border-solid py-10 border-y-2 md:border-gray-500/50 ">
        <div className="grid grid-cols-1 mx-10 md:ml-10 md:pl-0 md:grid-cols-2 items-center 2xl:mx-60 2xl:my-16">
          <div className="max-w-[624px] px-5 text-center md:text-left">
            <h4 className="text-[#00A3FF] font-bold text-5xl md:text-[64px]">
              VitaReels
            </h4>
            <p className="text-[#404040] line-clamp-3 text-sm md:text-base">
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
              <p className="text-white text-sm md:text-base font-extrabold">
                Know more
              </p>{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-3 h-5 md:w-5 md:h-5 text-white"
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
                <h4 className="font-bold text-lg md:text-xl">
                  Industries we serve
                </h4>
                <p className="md:text-base text-sm text-[#8F8F8F]">
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
                <h4 className="font-bold text-lg md:text-xl">Who can join?</h4>
                <p className="md:text-base text-sm text-[#8F8F8F]">
                  Competent Web3/tech talents/creatives and top recruiters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-5 2xl:ml-60 2xl:my-16 items-center h-['3000px'] my-10 md:my-0">
          <div className="text-white col-span-2">
            <div className="text-center md:text-start my-5 md:ml-10">
              <h3 className="font-bold md:font-extrabold text-4xl md:text-[62px] mb-3 md:mb-7">
                Checkout Our Top
              </h3>
              <h3 className="font-extrabold text-4xl md:text-[62px] mb-3 md:mb-7">
                Skills and <span className="text-[#00A3FF]">Hire!</span>
              </h3>
              <p className="text-base md:text-xl px-5 md:px-0 text-[#404040]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum."
              </p>
              <div className="flex flex-center justify-center md:justify-start">
                <p className="mt-10 bg-blue-500 py-3 px-8 md:py-5 md:px-16 rounded-full  text-base font-bold md:font-extrabold ">
                  Hire a Talent
                </p>
              </div>
            </div>
          </div>

          <div className="h-[1000px] col-span-3 hidden md:grid pt-[-10] overflow-hidden">
            <div className="h-[100%] w-auto hidden md:block bg-[url('/Frame.svg')] bg-no-repeat bg-cover"></div>
          </div>
        </div>
      </section>

      {/* <section className="h-56 2xl:mx-60 2xl:my-16 bg-gradient-to-r from-[#AFFCAE] to-[#00A3FF] grid grid-cols-1 md:grid-cols-8 md:rounded-2xl justify-center"> */}
      <section className="">
        <div className='2xl:grid 2xl:place-items-center overflow-hidden'>
          <div className="2xl:h-[600px] 2xl:w-[1180px] bg-gradient-to-r from-[#AFFCAE] to-[#00A3FF] 2xl:bg-[url('/reelsbg.png')] bg-contain bg-no-repeat">
            <div className=" flex flex-col justify-center items-center 2xl:justify-start 2xl:items-start ">
              <div className="flex flex-col justify-center items-center 2xl:items-start">
                <div className=" text-center md:text-start pt-10 2xl:pl-10 2xl:pt-10">
                  <p className="text-5xl md:text-7xl font-bold text-white text-center 2xl:text-start">
                    Show your{' '}
                  </p>
                  <p className="text-5xl md:text-7xl font-bold text-white text-center 2xl:text-start">
                    Skill through
                  </p>
                  <p className="text-5xl md:text-7xl font-bold text-white text-center 2xl:text-start">
                    Reels
                  </p>
                </div>
                <div className="mt-10 flex pb-10 2xl:pl-10 md:flex-start text-center md:justify-start justify-center">
                  <p className="text-base md:text-xl text-white font-bold md:font-extrabold bg-blue-500 py-3 px-8 md:py-5 md:px-16 rounded-full">
                    Hire a Talent
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="hidden md:block h-[100%] w-full col-span-5 bg-[url('/reel.svg')] bg-cover"></div> */}
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center my-20 md:my-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 md:gap-x-10 ">
          <div className="text-white max-w-xs md:max-w-[506px] bg-[#171717] p-5">
            <div className="flex gap-2">
              <div className="rounded-full bg-yellow w-[55px] h-[55px]">
                <Image
                  height={200}
                  width={200}
                  className="h-10 w-10"
                  src="/profile.png"
                  alt="vitalogo"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-extrabold text-base">Awoosika Isreal</p>
                <p className="text-xs">Founder & CEO Web3bridge</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-sm text-justify text-[#404040]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                error delectus iure veniam dolorum dignissimos vel. Dolorem iste
                cupiditate magni inventore vel quam, quidem quasi consequatur
                sit dolores placeat minus sapiente ipsa ea! Voluptates,
                praesentium vel? Quia inventore nobis, odio, suscipit molestiae,
                eius iusto fugiat nostrum sequi necessitatibus aut fuga!
              </p>
              <div className="flex gap-2 text-[#00A3FF]">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
            </div>
          </div>
          <div className="text-white max-w-xs md:max-w-[506px] bg-[#171717] p-5">
            <div className="flex gap-2">
              <div className="rounded-full bg-yellow w-[55px] h-[55px]">
                <Image
                  height={200}
                  width={200}
                  className="h-10 w-10"
                  src="/profile.png"
                  alt="vitalogo"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-extrabold text-base">Awoosika Isreal</p>
                <p className="text-xs">Founder & CEO Web3bridge</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-sm text-justify text-[#404040]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                error delectus iure veniam dolorum dignissimos vel. Dolorem iste
                cupiditate magni inventore vel quam, quidem quasi consequatur
                sit dolores placeat minus sapiente ipsa ea! Voluptates,
                praesentium vel? Quia inventore nobis, odio, suscipit molestiae,
                eius iusto fugiat nostrum sequi necessitatibus aut fuga!
              </p>
              <div className="flex gap-2 text-[#00A3FF]">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black mb-20">
        <div className="bg-white grid grid-cols-1 md:grid-cols-3 md:rounded-t-[100px]">
          <div className="flex-shrink-0 md:pr-5 text-center md:text-start md:px-10 text-white items-center my-10 mx-10 md:mx-20">
            <Image
              height={60}
              width={150}
              className="h-8 w-8"
              src="/logo2.svg"
              alt="vitalogo"
            />
            <p className="text-base md:text-xl text-[#404040]">
              Connecting competent tech and web3 talents to the best recruiters.
            </p>
          </div>
          <div className="flex flex-col items-center my-10">
            <div className="flex flex-col gap-y-5 text-base md:text-xl text-[#404040]">
              <p className="font-bold text-xl text-black">Quick Links</p>
              <p>Discord</p>
              <p>Twitter</p>
              <p>About VitaReel</p>
              <p>Careers at VitaReels</p>
              <p>Blog</p>
              <p>Brand Assets</p>
            </div>
          </div>
          <div className="flex flex-col my-10 md:pr-20">
            <div className="flex-shrink-0 md:pr-5">
              <p className="font-extrabold text-5xl text-center md:text-start">
                Join Our
              </p>
              <p className="text-[#00A3FF] font-extrabold text-5xl text-center md:text-start">
                Newsletter
              </p>
              <p className="text-base md:text-xl text-[#404040] text-center md:text-start">
                Subscribe to receive industry updates about jobs and
                opportunities.
              </p>
              <div className="flex flex-col gap-y-5 mx-10 md:mx-0">
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-[#E9E9E9] text-base md:text-xl px-3 h-14 md:px-5 rounded-xl md:h-16"
                />
                <input
                  type="submit"
                  className="text-white bg-black px-3 h-14 text-base md:text-xl md:px-5 rounded-xl md:h-16"
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
