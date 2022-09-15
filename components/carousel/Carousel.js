import { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const images = ['/caro1.png', '/caroo2.png', '/caro1.png', '/caroo2.png'];

function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 200,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (

      <div className="reels text-white">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
              <img className="" src={img} alt={img} />
            </div>
          ))}
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
}

export default Carousel;
