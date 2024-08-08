import React from 'react';
import { useLocation } from 'react-router-dom';

const SeatBooking = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  return (
    <div className='text-white p-20 pt-32'>
        <div>
            <h2 className='md:text-3xl md:font-semibold font-rubix md:mb-10'>Ticket confirmation</h2>
            <div className=''>
                {movie && (
                <div className='flex justify-between'>
                    <div className='md:w-80'>
                        <img
                        src={`https://image.tmdb.org/t/p/w500${movie[0]}`}
                        alt={movie[2]}
                        className="md:w-80"
                        />
                    </div>
                    <div className=''>
                        <div className='border md:w-auto h-96 p-10 '>
                            <h1 className='text-white z-50 text-3xl'>Movie : <span className='text-3xl font-bold pl-32'>{movie[2]}</span></h1>
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