import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoHome from './logohome';
import Searchbar from './searchbar';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Homepage = () => {
  const toastRef = useRef(false);

  useEffect(() => {
    if (!toastRef.current) {
      toast.success('Login successful', {
        position: "top-center",
        style: {
          border: '1px solid #713200',
          padding: '24px',
          color: '#713200',
          tabSize:'20rem',
          borderRadius:'50px',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
        duration:5000,
      });
      toastRef.current = true;
    }
  }, []);
  const [popularImages, setPopularImages] = useState([]);
  const [horrorImages, sethorrorImages] = useState([]);
  const [trendingImages, settrendingImages] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const { email } = useParams();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://65.2.130.52:5001/sliderpopular');
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
        const response = await axios.get('https://65.2.130.52:5001/slidertrending');
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
        const response = await axios.get('https://65.2.130.52:5001/sliderhorror');
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
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    autoplay: true,
    autoplaySpeed: 4800,
  };
  var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  const handleImageClick = (movie) => {
    navigate('/booking', { state: { movie } });
};

  return (
    <div className="select-none">
      <Searchbar/>
      <div><Toaster/></div>
      {popularImages.length > 0 && (
      <div className="flex justify-center relative md:pb-6 cursor-pointer">
        <div className="w-11/12">
          <Slider {...settings2}>
            {popularImages.map((image, index) => (
              <div key={index} className="relative" onClick={() => handleImageClick(image)}>
                <div className='flex justify-end'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${image[1]}`}
                    alt="Popular Image"
                    className="px-2 w-7/12"
                    style={{ filter: "brightness(0.25) blur(4.9px)" }}
                  />
                </div>
                <div className="absolute top-14 left-0 right-0 bg-opacity-50 text-white z-20 p-4 px-8">
                  <p className="font-semibold font-rubix text-6xl pb-4">{image[2]}</p>
                  <p className='relative left-4 w-4/12 text-lg font-rubix tracking-wide scale-x-105'>{image[3]}</p>
                </div>
              </div>
            ))}
          </Slider>
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
                  <div className='cursor-pointer'>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${imagePair[0]}`}
                      alt={`Image ${index}`}
                      className="px-2 hover:z-50"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      

      <div className="flex justify-center relative md:pb-6">
        <div className="w-11/12">
          <div className="text-white font-poppins font-semibold text-2xl p-3">
            <p className='font-rubix'>Trending this week </p>
          </div>
          <Slider {...settings1}>
            {trendingImages.map((imagePair, index) => (
              <div key={index} className="relative">
                <div
                  className="px-0 hover:transition-all hover:duration-300 duration-300 hover:scale-125 hover:z-50"
                  onClick={() => handleImageClick(imagePair)}
                >
                  <div className='cursor-pointer'>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${imagePair[0]}`}
                      alt={`Image ${index}`}
                      className="px-2 hover:z-50"
                    />
                  </div>
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