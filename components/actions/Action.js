import React from 'react';
import Image from 'next/image';

function Action({title, description}) {
  return (
    <div className='max-w-[235px] mb-10 md:mb-0'>
      <div >
        <h3 className='text-white text-base md:text-2xl font-bold'>{title}</h3>
      </div>
      <Image
        height={60}
        width={150}
        className="h-5 w-5 md:h-8 md:w-8"
        src="/line.svg"
        alt="hrline"
      />
      <p className='text-[#404040] line-clamp-3 text-sm md:text-base'>
        {description}
      </p>
    </div>
  );
}

export default Action;
