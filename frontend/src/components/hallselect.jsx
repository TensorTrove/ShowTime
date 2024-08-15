import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Searchbar from './searchbar';
import axios from 'axios'; 

const Hallselect = () => {
  const location = useLocation();
  const movieName = location.state?.movieName;

  const currentDate = new Date();
  const dates = Array.from({ length: 5 }, (_, i) => new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000));

  const [selectedDateIndex, setSelectedDateIndex] = useState(0); 
  const [selectedTime, setSelectedTime] = useState(null);

  const hallData = [
    {
      name: 'INOX Cinemas X',
      times: ['10:20 am', '01:10 pm', '04:30 pm', '08:45 pm'],
    },
    {
      name: 'IMax-3D Y',
      times: ['11:30 am', '02:25 pm', '05:55 pm', '09:15 pm'],
    },
    {
      name: 'Cinepolis Z',
      times: ['11:25 am', '02:05 pm', '04:55 pm', '07:45 pm'],
    },
  ];

  const handleDateSelect = (index) => {
    setSelectedDateIndex(index);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (selectedDateIndex !== null) {
      const selectedDate = dates[selectedDateIndex];
      axios.post('http://127.0.0.1:5001/billing', {
        movieName,
        time,
        date: selectedDate.toLocaleDateString(),
      })
        .then((response) => {
          window.location.href = '/seatselection';
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className='px-14'>
      <Searchbar/>
      <div className='flex justify-between text-white'>
        <h1 className='md:text-3xl font-medium font-rubix'>Halls for : {movieName}</h1>
        <div className='flex justify-around mb-10 w-fit'>
          {dates.map((date, index) => (
            <div
              key={index}
              className={`bg-slate-800 p-4 m-2 w-28 cursor-pointer ${
                selectedDateIndex === index ? 'bg-orange-500' : ''
              }`}
              onClick={() => handleDateSelect(index)}
            >
              {date.toLocaleDateString()}
            </div>
          ))}
        </div>
      </div>
      <div className='mt-14 text-white'>
        {hallData.map((hall, index) => (
          <div key={index} className='h-56 w-full border my-7 flex justify-between p-8 px-10'>
            <div>
              <p className='text-4xl font-semibold'>{hall.name}</p>
              <div className='flex justify-around md:w-72 md:mt-5 '>
                <p className='text-green-500'>M-ticket</p>
                <p className='text-yellow-500'>Food & Beverages</p>
              </div>
            </div>
            <div className='flex justify-center md:mt-3'>
              {hall.times.map((time, timeIndex) => (
                <div
                  key={timeIndex}
                  className='w-36 mx-5 h-20 border cursor-pointer hover:bg-slate-900 transition-all duration-200'
                  onClick={() => handleTimeSelect(time)}
                >
                  <div className='md:p-5 flex justify-center'>
                    <div>
                      <p className='font-poppins md:text-lg'>{time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hallselect;