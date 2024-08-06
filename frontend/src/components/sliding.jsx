import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sliding = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5001/slider');
        setImages(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchImages();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 2,
    prevArrow: null,
    nextArrow: null,
  };

  return (
    <div className='flex justify-center'>
      <div className='w-11/12'>
        <Slider {...settings}>
          {images.map((imagePair, index) => (
            <div key={index}>
              <div className=''>
                <img src={`https://image.tmdb.org/t/p/w500${imagePair[0]}`} alt={`Image ${index}`} className='px-2' />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliding;