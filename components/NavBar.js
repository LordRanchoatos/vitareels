import React, { useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { FaTwitter } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

// import dynamic from 'next/dynamic';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-black border-solid border-b border-gray-500/50">
        <div className="max-w-8xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 pr-5 md:px-10 text-white items-center sm:border-r-none md:border-solid md:border-r md:border-gray-500/50">
                <Image
                  height={60}
                  width={150}
                  className="h-8 w-8"
                  src="/logo.svg"
                  alt="vitalogo"
                />
              </div>

              <div className="hidden md:block">
                <div className="ml-5 flex items-baseline space-x-4 text-base">
                  <a
                    href="#"
                    className=" text-white px-3 py-2 rounded-md text-base font-normal"
                  >
                    HOME
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-base font-normal"
                  >
                    ABOUT US
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-base font-normal"
                  >
                    CONTACT
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-base font-normal"
                  >
                    HIRE A TALENT
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:flex">
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-base font-normal flex items-center gap-2"
              >
                <FaTwitter /> TWITTER
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-base font-normal flex items-center gap-2"
              >
                <BsDiscord /> DISCORD
              </a>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-black"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  HOME
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  ABOUT US
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  CONTACT
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  HIRE A TALENT
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium"
                >
                  <FaTwitter /> TWITTER
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium"
                >
                  <BsDiscord /> DISCORD
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;

// div after nav py-4 sm:py-2
