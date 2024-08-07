import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
  const [popularImages, setPopularImages] = useState([]);
  const [horrorImages, sethorrorImages] = useState([]);
  const [trendingImages, settrendingImages] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5001/sliderpopular');
        setPopularImages(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchImages();
  }, []);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5001/slidertrending');
        settrendingImages(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchImages();
  }, []);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5001/sliderhorror');
        sethorrorImages(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (popularImages.length > 0) {
      setSelectedImage(popularImages[0]);
    }
  }, [popularImages]);
  useEffect(() => {
    if (trendingImages.length > 0) {
      setSelectedImage(trendingImages[0]);
    }
  }, [trendingImages]);
  useEffect(() => {
    if (horrorImages.length > 0) {
      setSelectedImage(horrorImages[0]);
    }
  }, [horrorImages]);

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

  const handleImageClick = (imagePair) => {
    setSelectedImage(imagePair);
  };

  return (
    <div className="select-none">
      
      {selectedImage && (
      <div className="flex justify-center relative md:pb-6">
        <div className="w-11/12">
        <div className='flex justify-end'>
        <img
            src={`https://image.tmdb.org/t/p/w500${selectedImage[1]}`}
            alt="Selected Image"
            className="px-2 w-8/12"
            style={{ filter: "brightness(0.25) blur(4.9px)"}}
          />
        </div>
          <div className="absolute top-14 left-0 right-0 bg-opacity-50 text-white z-20 p-10 px-32">
            <p className="font-semibold font-rubix text-6xl pb-4">{selectedImage[2]}</p>
            <p className='relative left-4 w-4/12 text-lg font-rubix tracking-wide scale-x-105'>{selectedImage[3]}</p>
          </div>
        </div>
      </div>
    )}
      <div className="flex justify-center relative md:pb-6">
        <div className="w-11/12">
          <div className="text-white font-poppins font-semibold text-2xl p-3">
            <p className='font-rubix'>Latest Release</p>
          </div>
          <Slider {...settings}>
            {popularImages.map((imagePair, index) => (
              <div key={index} className="relative">
                <div
                  className="px-0 hover:transition-all hover:duration-300 duration-300 hover:scale-125 hover:z-50"
                  onClick={() => handleImageClick(imagePair)}
                >
                  <a href="">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${imagePair[0]}`}
                      alt={`Image ${index}`}
                      className="px-2 hover:z-50"
                    />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      

      <div className="flex justify-center relative md:pb-6">
        <div className="w-11/12">
          <div className="text-white font-poppins font-semibold text-2xl p-3">
            <p className='font-rubix'>Trending today</p>
          </div>
          <Slider {...settings}>
            {trendingImages.map((imagePair, index) => (
              <div key={index} className="relative">
                <div
                  className="px-0 hover:transition-all hover:duration-300 duration-300 hover:scale-125 hover:z-50"
                  onClick={() => handleImageClick(imagePair)}
                >
                  <a href="" className=''>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${imagePair[0]}`}
                      alt={`Image ${index}`}
                      className="px-2 hover:z-50"
                    />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Homepage;