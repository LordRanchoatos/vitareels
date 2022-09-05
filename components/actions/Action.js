import React from 'react';
import Image from 'next/image';

function Action({title, description}) {
  return (
    <div className='max-w-[235px]'>
      <div >
        <h3 className='text-white text-2xl font-bold'>{title}</h3>
      </div>
      <Image
        height={60}
        width={150}
        className="h-8 w-8"
        src="/line.svg"
        alt="hrline"
      />
      <p className='text-[#404040] line-clamp-3 text-base'>
        {description}
      </p>
    </div>
  );
}

export default Action;
