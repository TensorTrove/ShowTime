import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliding = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

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
    <div className="">
      {selectedImage && (
      <div className="flex justify-center relative md:pb-6">
        <div className="w-11/12">
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedImage[1]}`}
            alt="Selected Image"
            className="px-2 w-9/12"
            style={{ filter: "brightness(0.15)" }}
          />
          <div className="absolute top-0 left-0 right-0 bg-opacity-50 text-white flex justify-start z-20 p-10 px-32 font-semibold font-rubix text-4xl">
            <p className="">{selectedImage[2]}</p>
          </div>
        </div>
      </div>
    )}
      <div className="flex justify-center relative md:pb-6">
        <div className="w-11/12">
          <div className="text-white font-poppins font-semibold text-2xl p-3">
            <p>Popular</p>
          </div>
          <Slider {...settings}>
            {images.map((imagePair, index) => (
              <div key={index} className="relative">
                <div
                  className="px-1 hover:transition-all hover:duration-300 duration-300 hover:scale-150 hover:px-1"
                  onClick={() => handleImageClick(imagePair)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${imagePair[0]}`}
                    alt={`Image ${index}`}
                    className="px-2 hover:z-50"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sliding;