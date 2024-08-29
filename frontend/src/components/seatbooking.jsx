import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Searchbar from './searchbar';

const SeatBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  const [MovieData, setMovieData] = useState({});

  useEffect(() => {
    if (movie) {
      const sendData = async () => {
        try {
          const response = await fetch(`https://65.2.130.52:5001/searchOneMovie/${movie[5]}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ MovieData })
          });
          const data = await response.json();
          setMovieData(data);
        } catch (error) {
          console.error(error);
        }
      };
      sendData();
    }
  }, [movie]);

  const handleBookSeats = () => {
    navigate('/seat', { state: { movieName: MovieData[0] } });
  };

  return (
    <div className='text-white'>
      <Searchbar />
      <div className='overflow-hidden z-50 px-28'>
        <div className='flex justify-center'>
          <img
            src={`https://image.tmdb.org/t/p/w500${MovieData[5]}`}
            alt={movie[2]}
            className="md:w-7/12 absolute md:-z-50 darken-blur"
          />
        </div>
        <h2 className='md:text-4xl md:font-semibold font-rubix md:mb-10 bg-black'>Ticket confirmation</h2>
        <div className=''>
          {movie && (
            <div className='flex justify-between overflow-hidden'>
              <div className='md:w-80'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie[0]}`}
                  alt={movie[2]}
                  className="md:w-80"
                />
              </div>
              <div className=''>
                <div className='border md:w-auto h-96 p-10 bg-black border-green-200'>
                  <div className='flex justify-between h-1/6'>
                    <h1 className='text-white z-50 font-semibold text-3xl my-auto'>Name : </h1>
                    <h1 className='text-3xl font-bold pl-32 my-auto'>{MovieData[0]}</h1>
                  </div>                  
                  <div className='flex justify-between h-1/6'>
                    <h1 className='text-white z-50 font-semibold text-3xl my-auto'>Runtime : </h1>
                    <h1 className='text-3xl font-bold pl-32 my-auto'>{MovieData[2]}</h1>
                  </div>
                  <div className='flex justify-between h-1/6'>
                    <h1 className='text-white z-50 font-semibold text-3xl my-auto'>Release : </h1>
                    <h1 className='text-3xl font-bold pl-32 my-auto'>{MovieData[1]}</h1>
                  </div>
                  <div className='flex justify-between h-1/6'>
                    <h1 className='text-white z-50 font-semibold text-3xl my-auto'>Rating : </h1>
                    <h1 className='text-3xl font-bold pl-32 my-auto'>{MovieData[4]}</h1>
                  </div>
                  <div className='flex justify-between h-1/6 md:mb-2'>
                    <h1 className='text-white z-50 font-semibold text-2xl my-auto'>Genres : </h1>
                    <h1 className='text-2xl font-semibold pl-32 my-auto'>{MovieData[3] ? MovieData[3].join(' , ') : ''}</h1>
                  </div>
                  <div className='flex justify-center h-1/6'>
                    <a className='cursor-pointer' onClick={handleBookSeats}>
                      <div className='md:w-60 md:h-full flex justify-center bg-[#F84464] rounded-xl my-auto'>
                        <p className='my-auto font-medium text-lg'>Book Seats</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;