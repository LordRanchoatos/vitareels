import React from 'react';
import Image from 'next/image';

function Action() {
  return (
    <div className='max-w-[235px]'>
      <div >
        <h3 className='text-white'>Sign Up</h3>
      </div>
      <Image
        height={60}
        width={150}
        className="h-8 w-8"
        src="/line.svg"
        alt="hrline"
      />
      <p className='text-[#404040] line-clamp-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

export default Action;
