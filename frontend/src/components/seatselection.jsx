import React, { useState, useEffect } from 'react';
import screen from '../images/screen.svg';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Seat = ({ section, index, selected, onClick }) => (
  <div
    className={`w-10 h-10 border ${index % 2 === 1 ? 'mr-10' : 'mx-2'} flex justify-center items-center ${
      selected ? 'bg-blue-500' : ''
    }`}
    onClick={onClick}
  >
    <p className='text-sm'>{index + 1}</p>
  </div>
);

const Seatselection = () => {
  const location = useLocation();
  const objectId = location.search.split('objectId=')[1];

  const [selectedSeats, setSelectedSeats] = useState(
    Object.fromEntries([
      ['J', new Array(18).fill(false)],
      ['I', new Array(18).fill(false)],
      ['H', new Array(18).fill(false)],
      ['G', new Array(18).fill(false)],
      ['F', new Array(18).fill(false)],
      ['E', new Array(18).fill(false)],
      ['D', new Array(18).fill(false)],
      ['C', new Array(18).fill(false)],
      ['B', new Array(16).fill(false)],
      ['A', new Array(16).fill(false)],
    ])
  );

  useEffect(() => {
    axios.get(`http://127.0.0.1:5001/get_booked_seats`)
      .then(response => {
        const bookedSeats = response.data.seats;
        const updatedSelectedSeats = { ...selectedSeats };
        bookedSeats.forEach(seat => {
          const section = seat[0];
          const index = parseInt(seat.slice(1)) - 1;
          updatedSelectedSeats[section][index] = true;
        });
        setSelectedSeats(updatedSelectedSeats);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSeatClick = (section, index) => {
    setSelectedSeats((prevSeats) => ({
      ...prevSeats,
      [section]: prevSeats[section].map((selected, i) => i === index ? !selected : selected),
    }));

    // Book the seat
    axios.post('http://127.0.0.1:5001/book_seat', {
      objectId,
      section,
      index,
      selected: !selectedSeats[section][index], // send the selected state to the server
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='p-10 px-24 text-white select-none'>
        <h1 className='font-poppins font-medium'>Rs.800 - VIP</h1>
        <hr className='mb-5 mt-2'/>
        <div className='flex justify-evenly'>
            
            <h1 className='text-xl font-semibold w-5 text-center my-2'>J</h1>
            <div className='flex justify-center'>
                {new Array(18).fill(0).map((_, index) => (
                    <div key={index}>
                        <div
                            className={`w-10 h-10 border cursor-pointer ${index % 2 === 1 ? 'mr-10' : 'mx-2'} flex justify-center items-center ${
                                selectedSeats.J[index] ? 'bg-blue-500' : ''
                            }`}
                            onClick={() => handleSeatClick('J', index)}
                            >
                            <p className='text-sm'>{index + 1}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
        <h1 className='font-poppins font-medium mt-4'>Rs.650 - Premium</h1>
        <hr className='mb-10 mt-2'/>
        <div className='flex justify-evenly mb-5'>
            <h1 className='text-xl font-semibold w-5 text-center my-2'>I</h1>
            <div className='flex justify-center'>
                {new Array(18).fill(0).map((_, index) => (
                    <div key={index}>
                        <div
                            className={`w-10 h-10 border cursor-pointer ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                selectedSeats.I[index] ? 'bg-blue-500' : ''
                            }`}
                            onClick={() => handleSeatClick('I', index)}
                        >
                            <p className='text-sm'>{index + 1}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex justify-evenly mb-5'>
            <h1 className='text-xl font-semibold w-5 text-center my-2'>H</h1>
            <div className='flex justify-center'>
                {new Array(18).fill(0).map((_, index) => (
                    <div key={index}>
                        <div
                            className={`w-10 h-10 border cursor-pointer ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                selectedSeats.H[index] ? 'bg-blue-500' : ''
                            }`}
                            onClick={() => handleSeatClick('H', index)}
                        >
                            <p className='text-sm'>{index + 1}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex justify-evenly mb-5'>
            <h1 className='text-xl font-semibold w-5 text-center my-2'>G</h1>
            <div className='flex justify-center'>
                {new Array(18).fill(0).map((_, index) => (
                    <div key={index}>
                        <div
                            className={`w-10 h-10 border cursor-pointer ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                selectedSeats.G[index] ? 'bg-blue-500' : ''
                            }`}
                            onClick={() => handleSeatClick('G', index)}
                            >
                                <p className='text-sm'>{index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                <div className='flex justify-evenly mb-5'>
                    <h1 className='text-xl font-semibold w-5 text-center my-2'>F</h1>
                    <div className='flex justify-center'>
                        {new Array(18).fill(0).map((_, index) => (
                            <div key={index}>
                                <div
                                    className={`w-10 h-10 border cursor-pointer ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                        selectedSeats.F[index] ? 'bg-blue-500' : ''
                                    }`}
                                    onClick={() => handleSeatClick('F', index)}
                                >
                                    <p className='text-sm'>{index + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className='font-poppins font-medium mt-4'>Rs.500 - Executive</h1>
                <hr className='mb-10 mt-2'/>
                <div className='flex justify-evenly mb-5'>
                    <h1 className='text-xl font-semibold w-5 text-center my-2'>E</h1>
                    <div className='flex justify-center'>
                        {new Array(18).fill(0).map((_, index) => (
                            <div key={index}>
                                <div
                                    className={`w-10 h-10 border cursor-pointer ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                        selectedSeats.E[index] ? 'bg-blue-500' : ''
                                    }`}
                                    onClick={() => handleSeatClick('E', index)}
                                >
                                    <p className='text-sm'>{index + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-evenly mb-5'>
                    <h1 className='text-xl font-semibold w-5 text-center my-2'>D</h1>
                    <div className='flex justify-center'>
                        {new Array(18).fill(0).map((_, index) => (
                            <div key={index}>
                                <div
                                    className={`w-10 h-10 border cursor-pointer ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                        selectedSeats.D[index] ? 'bg-blue-500' : ''
                                    }`}
                                    onClick={() => handleSeatClick('D', index)}
                                >
                                    <p className='text-sm'>{index + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-evenly mb-5'>
                    <h1 className='text-xl font-semibold w-5 text-center my-2'>C</h1>
                    <div className='flex justify-center'>
                        {new Array(18).fill(0).map((_, index) => (
                            <div key={index}>
                                <div
                                    className={`w-10 h-10 border cursor-pointer ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                        selectedSeats.C[index] ? 'bg-blue-500' : ''
                                    }`}
                                    onClick={() => handleSeatClick('C', index)}
                                >
                                    <p className='text-sm'>{index + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className='font-poppins font-medium mt-4'>Rs.340 - Normal</h1>
                <hr className='mb-10 mt-2'/>
                <div className='flex justify-evenly mb-5'>
                    <h1 className='text-xl font-semibold w-5 text-center my-2'>B</h1>
                    <div className='flex justify-center'>
                        {new Array(16).fill(0).map((_, index) => (
                            <div key={index}>
                                <div
                                className={`w-10 h-10 border cursor-pointer ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                    selectedSeats.B[index] ? 'bg-blue-500' : ''
                                }`}
                                onClick={() => handleSeatClick('B', index)}
                            >
                                <p className='text-sm'>{index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-evenly mb-5'>
                <h1 className='text-xl font-semibold w-5 text-center my-2'>A</h1>
                <div className='flex justify-center'>
                    {new Array(16).fill(0).map((_, index) => (
                        <div key={index}>
                            <div
                                className={`w-10 h-10 border cursor-pointer ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                    selectedSeats.A[index] ? 'bg-blue-500' : ''
                                }`}
                                onClick={() => handleSeatClick('A', index)}
                            >
                                <p className='text-sm'>{index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={screen} alt='screen' className='h-24 mt-10'/>
            </div>
            
        </div>
        </div>
        );
    };
    
    export default Seatselection;