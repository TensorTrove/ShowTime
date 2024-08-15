import React, { useState } from 'react';
import screen from '../images/screen.svg';

const Seatselection = () => {
  const [selectedSeats, setSelectedSeats] = useState({
    vip: new Array(18).fill(false),
    premium1: new Array(18).fill(false),
    premium2: new Array(18).fill(false),
    premium3: new Array(18).fill(false),
    premium4: new Array(18).fill(false),
    executive1: new Array(18).fill(false),
    executive2: new Array(18).fill(false),
    executive3: new Array(18).fill(false),
    normal1: new Array(16).fill(false),
    normal2: new Array(16).fill(false),
  });


  const handleSeatClick = (section, index) => {
    setSelectedSeats((prevSelectedSeats) => {
      prevSelectedSeats[section][index] = !prevSelectedSeats[section][index];
      return { ...prevSelectedSeats };
    });
  };
  return (
    <div className='p-10 px-24 text-white'>
        <h1 className='font-poppins font-medium'>Rs.800 - VIP</h1>
        <hr className='mb-5 mt-2'/>
        <div className='flex justify-evenly'>
            
            <h1 className='text-xl font-semibold w-5 text-center my-2'>J</h1>
            <div className='flex justify-center'>
                {new Array(18).fill(0).map((_, index) => (
                    <div key={index}>
                        <div
                            className={`w-10 h-10 border ${index % 2 === 1 ? 'mr-10' : 'mx-2'} flex justify-center items-center ${
                                selectedSeats.vip[index] ? 'bg-blue-500' : ''
                            }`}
                            onClick={() => handleSeatClick('vip', index)}
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
                            className={`w-10 h-10 border ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                selectedSeats.premium1[index] ? 'bg-blue-500' : ''
                            }`}
                            onClick={() => handleSeatClick('premium1', index)}
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
                            className={`w-10 h-10 border ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                selectedSeats.premium2[index] ? 'bg-blue-500' : ''
                            }`}
                            onClick={() => handleSeatClick('premium2', index)}
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
                            className={`w-10 h-10 border ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                selectedSeats.premium3[index] ? 'bg-blue-500' : ''
                            }`}
                            onClick={() => handleSeatClick('premium3', index)}
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
                                    className={`w-10 h-10 border ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                        selectedSeats.premium4[index] ? 'bg-blue-500' : ''
                                    }`}
                                    onClick={() => handleSeatClick('premium4', index)}
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
                                    className={`w-10 h-10 border ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                        selectedSeats.executive1[index] ? 'bg-blue-500' : ''
                                    }`}
                                    onClick={() => handleSeatClick('executive1', index)}
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
                                    className={`w-10 h-10 border ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                        selectedSeats.executive2[index] ? 'bg-blue-500' : ''
                                    }`}
                                    onClick={() => handleSeatClick('executive2', index)}
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
                                    className={`w-10 h-10 border ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                        selectedSeats.executive3[index] ? 'bg-blue-500' : ''
                                    }`}
                                    onClick={() => handleSeatClick('executive3', index)}
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
                                className={`w-10 h-10 border ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                    selectedSeats.normal1[index] ? 'bg-blue-500' : ''
                                }`}
                                onClick={() => handleSeatClick('normal1', index)}
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
                                className={`w-10 h-10 border ${index === 2 ? 'mr-32 ml-3' : index === 14 ? 'mr-32 ml-3' : 'mx-3'} flex justify-center items-center ${
                                    selectedSeats.normal2[index] ? 'bg-blue-500' : ''
                                }`}
                                onClick={() => handleSeatClick('normal2', index)}
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