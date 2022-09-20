// import { useState } from 'react';
// import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const images = ['/caro1.png', '/caroo2.png', '/caro1.png', '/caroo2.png'];

// function Carousel() {
//   const NextArrow = ({ onClick }) => {
//     return (
//       <div className="arrow next" onClick={onClick}>
//         <FaArrowRight />
//       </div>
//     );
//   };

//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div className="arrow prev" onClick={onClick}>
//         <FaArrowLeft />
//       </div>
//     );
//   };

//   const [imageIndex, setImageIndex] = useState(0);

//   const settings = {
//     infinite: true,
//     lazyLoad: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     speed: 200,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: 0,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (current, next) => setImageIndex(next),
//   };

//   return (

//       <div className="reels text-white">
//         <Slider {...settings} className='flex'>
//           {images.map((img, idx) => (
//             <div className={idx === imageIndex ? 'slide activeSlide' : 'slide notAtive'}>
//               <img className="" src={img} alt={img} />
//             </div>
//           ))}
//         </Slider>
        // <a
        //   href="#"
        //   className="bg-black py-2 md:py-12 px-5 md:px-10 rounded-full flex justify-center  items-center gap-x-3 text-center "
        // >
        //   <p className="text-sm md:text-base font-bold md:font-extrabold ">
        //     Become a Talent
        //   </p>{' '}
        //   <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     fill="none"
        //     viewBox="0 0 24 24"
        //     stroke-width="1.5"
        //     stroke="currentColor"
        //     className="w-3 h-3 md:w-5 md:h-5"
        //   >
        //     <path
        //       stroke-linecap="round"
        //       stroke-linejoin="round"
        //       d="M8.25 4.5l7.5 7.5-7.5 7.5"
        //     />
        //   </svg>
        // </a>
//       </div>

//   );
// }

// export default Carousel;

// .reels {
//   width: 100%;
//   margin: 10rem auto;
//   height: 300px;
//   padding: 0;
// }

// .slide img {
//   width: 100%;
//   margin: 0 auto;
// }
// .notActive {
// }

// .slide {
//   transform: scale(0.8); /* this is what the non active image looks like*/
//   transition: transform 300ms;
//   opacity: 0.5;
// }

// .activeSlide {
//   transform: scale(1.1); /* what the active image looks like */
//   opacity: 1;
// }

// .arrow {
//   background-color: green;
//   position: absolute;
//   cursor: pointer;
//   z-index: 10;
//   padding: .4rem;
//   border-radius: 50%;
// }

// .arrow svg {
//   transition: color 300ms;
// }

// .arrow svg:hover {
//   color: #00ff66;
// }

// .next {
//   right: 20%;
//   top: 50%;
// }

// .prev {
//   left: 20%;
//   top: 50%;
// }

// /* medial queries */
// @media(max-width: 960px) {
//   .reels {
//     margin: 10rem auto 0rem;
//     height: 500px;
//     width: 100%;
//   }

//   .slide img {
//     width: 100%;
//     /* margin: auto; */
//     height: 400px;
//   }

//   .slide {
//     transform: scale(0.8); /* this is what the non active image looks like*/
//     transition: transform 300ms;
//     opacity: 0.5;
//   }

//   .activeSlide {
//     transform: scale(1.1); /* what the active image looks like */
//     opacity: 1;
//   }

//   .arrow {
//     background-color: green;
//     position: absolute;
//     cursor: pointer;
//     z-index: 10;
//     padding: .4rem;
//     border-radius: 50%;
//   }

//   .arrow svg {
//     transition: color 300ms;
//   }

//   .arrow svg:hover {
//     color: #00ff66;
//   }

//   .next {
//     display: none;
//     right: 20%;
//     top: 50%;
//   }

//   .prev {
//     display: none;
//     left: 20%;
//     top: 50%;
//   }

// }

import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="arrow prev custom-prevArrow" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="arrow next custom-nextArrow" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const settings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    speed: 500,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
  };

  return (
    <div className='wrapper my-5 md:mt-20 text-white'>
      <Slider {...settings}>
        {images.map((slide, index) => {
          return (
            <div key={index}>
              <img src={slide} alt="slider" key={index} className="image" />
            </div>
          );
        })}
      </Slider>
      <a
          href="#"
          className="bg-black py-2 md:py-12 px-5 md:px-10 rounded-full flex justify-center  items-center gap-x-3 text-center "
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
  );
};

export default Carousel;
