import React, { useState, useEffect, useCallback } from 'react';
import screen from '../images/screen.svg';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Seat = ({ section, index, booked, selected, onClick, modulo }) => (
    <div
      className={`w-10 h-10 border cursor-pointer ${index % modulo === 1 ? 'mr-12' : 'mr-5'} flex justify-center items-center ${
        booked ? 'bg-red-500' : selected ? 'bg-blue-500' : ''
      }`}
      onClick={onClick}
    >
      <p className='text-sm'>{index + 1}</p>
    </div>
);

const Seatselection = () => {
  const location = useLocation();
  const objectId = location.search.split('objectId=')[1];

  const [bookedSeats, setBookedSeats] = useState({}); 
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
    axios.get(`https://65.2.130.52:5001/get_booked_seats`)
      .then((response) => {
        const bookedSeatsFromAPI = response.data.seats;
        const bookedSeatsObj = {};
        bookedSeatsFromAPI.forEach((seat) => {
            console.log(seat)
            const section = seat.substring(0, 1);
            const index = seat.substring(1);
          const indexNum = parseInt(index)-1;
          console.log('Helllo '+indexNum);
          if (!bookedSeatsObj[section]) {
            bookedSeatsObj[section] = new Array(18).fill(false);
          }
          bookedSeatsObj[section][indexNum] = true;
        });
        setBookedSeats(bookedSeatsObj);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSeatClick = useCallback((section, index) => {
    console.log('typeof index:', typeof index);
    console.log('isNaN(index):', isNaN(index));
    setSelectedSeats((prevSeats) => ({
      ...prevSeats,
      [section]: prevSeats[section].map((selected, i) => i === index ? !selected : selected),
    }));
  
    // Book the seat
    axios.post('http://65.2.130.52:5001/book_seat', {
        objectId,
        section,
        index: Number(index) + 1, 
        selected: !selectedSeats[section][index],
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedSeats, setSelectedSeats, objectId]);
  
  const handleBookSeats = useCallback(() => {
    axios.post('http://65.2.130.52:5001/book_seats', {
      objectId,
      seats: Object.entries(selectedSeats).reduce((acc, [section, seats]) => {
        seats.forEach((selected, index) => {
          if (selected) {
            acc.push(`${section}${Number(index) + 1}`); 
            console.log(`${section}${Number(index) + 1}`)
          }
        });
        return acc;
      }, []),
    })
      .then((response) => {
        console.log(response.data);
        window.location.href = `/finalbill?objectId=${objectId}`;
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedSeats, objectId]);

  return (
    <div className='p-10 px-24 text-white select-none'>
        <div className='flex justify-evenly w-fit float-right'>
            <div className='flex justify-between w-fit'>
                <div className='w-4 h-4 bg-[#3B82F6] mx-3 my-auto'>
                </div>
                <h1 className=''>
                    Currently selected
                </h1>
            </div>
            <div className='flex justify-between w-fit'>
                <div className='w-4 h-4 bg-[#ec4f4f] mx-3 my-auto'>
                </div>
                <h1 className=''>
                    Booked
                </h1>
            </div>
        </div>
      <h1 className='font-poppins font-medium'>VIP</h1>
      <hr className='mb-5 mt-2'/>
      <div className='flex justify-evenly'>
        <h1 className='text-xl font-semibold w-5 text-center my-2'>J</h1>
        <div className='flex justify-center'>
        {new Array(18).fill(0).map((_, index) => (
        <div key={index}>
            <Seat
            section='J'
            index={index}
            booked={bookedSeats.J && bookedSeats.J[index]}
            selected={selectedSeats.J[index]}
            onClick={() => handleSeatClick('J', index)}
            modulo={2} // modulo 2 for VIP section
            />
        </div>
        ))}
        </div>
      </div>
      <h1 className='font-poppins font-medium mt-4'>Premium</h1>
      <hr className='mb-10 mt-2'/>
      <div className='flex justify-evenly mb-5'>
        <h1 className='text-xl font-semibold w-5 text-center my-2'>I</h1>
        <div className='flex justify-center'>
          {new Array(18).fill(0).map((_, index) => (
            <div key={index}>
              <Seat
                section='I'
                index={index}
                booked={bookedSeats.I && bookedSeats.I[index]}
                selected={selectedSeats.I[index]}
                onClick={() => handleSeatClick('I', index)}
                modulo={7}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-evenly mb-5'>
        <h1 className='text-xl font-semibold w-5 text-center my-2'>H</h1>
        <div className='flex justify-center'>
          {new Array(18).fill(0).map((_, index) => (
            <div key={index}>
              <Seat
                section='H'
                index={index}
                booked={bookedSeats.H && bookedSeats.H[index]}
                selected={selectedSeats.H[index]}
                onClick={() => handleSeatClick('H', index)}
                modulo={7}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-evenly mb-5'>
        <h1 className='text-xl font-semibold w-5 text-center my-2'>G</h1>
        <div className='flex justify-center'>
          {new Array(18).fill(0).map((_, index) => (
            <div key={index}>
              <Seat
                section='G'
                index={index}
                booked={bookedSeats.G && bookedSeats.G[index]}
                selected={selectedSeats.G[index]}
                onClick={() => handleSeatClick('G', index)}
                modulo={7}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-evenly mb-5'>
        <h1 className='text-xl font-semibold w-5 text-center my-2'>F</h1>
        <div className='flex justify-center'>
          {new Array(18).fill(0).map((_, index) => (
            <div key={index}>
              <Seat
                section='F'
                index={index}
                booked={bookedSeats.F && bookedSeats.F[index]}
                selected={selectedSeats.F[index]}
                onClick={() => handleSeatClick('F', index)}
                modulo={7}
              />
            </div>
          ))}
        </div>
      </div>
      <h1 className='font-poppins font-medium mt-4'>Executive</h1>
      <hr className='mb-10 mt-2'/>
      <div className='flex justify-evenly mb-5'>
        <h1 className='text-xl font-semibold w-5 text-center my-2'>E</h1>
        <div className='flex justify-center'>
          {new Array(18).fill(0).map((_, index) => (
            <div key={index}>
              <Seat
                section='E'
                index={index}
                booked={bookedSeats.E && bookedSeats.E[index]}
                selected={selectedSeats.E[index]}
                onClick={() => handleSeatClick('E', index)}
                modulo={14}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-evenly mb-5'>
        <h1 className='text-xl font-semibold w-5 text-center my-2'>D</h1>
        <div className='flex justify-center'>
          {new Array(18).fill(0).map((_, index) => (
            <div key={index}>
              <Seat
                section='D'
                index={index}
                booked={bookedSeats.D && bookedSeats.D[index]}
                selected={selectedSeats.D[index]}
                onClick={() => handleSeatClick('D', index)}
                modulo={14}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-evenly mb-5'>
        <h1 className='text-xl font-semibold w-5 text-center my-2'>C</h1>
        <div className='flex justify-center'>
          {new Array(18).fill(0).map((_, index) => (
            <div key={index}>
              <Seat
                section='C'
                index={index}
                booked={bookedSeats.C && bookedSeats.C[index]}
                selected={selectedSeats.C[index]}
                onClick={() => handleSeatClick('C', index)}
                modulo={14}
              />
            </div>
          ))}
        </div>
      </div>
      <h1 className='font-poppins font-medium mt-4'>Normal</h1>
      <hr className='mb-10 mt-2'/>
      <div className='flex justify-evenly mb-5'>
        <h1 className='text-xl font-semibold w-5 text-center my-2'>B</h1>
        <div className='flex justify-center'>
          {new Array(16).fill(0).map((_, index) => (
            <div key={index}>
              <Seat
                section='B'
                index={index}
                booked={bookedSeats.B && bookedSeats.B[index]}
                selected={selectedSeats.B[index]}
                onClick={() => handleSeatClick('B', index)}
                modulo={12}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-evenly mb-5'>
        <h1 className='text-xl font-semibold w-5 text-center my-2'>A</h1>
        <div className='flex justify-center'>
          {new Array(16).fill(0).map((_, index) => (
            <div key={index}>
              <Seat
                section='A'
                index={index}
                booked={bookedSeats.A && bookedSeats.A[index]}
                selected={selectedSeats.A[index]}
                onClick={() => handleSeatClick('A', index)}
                modulo={12}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center'>
        <img src={screen} alt='screen' className='w-48 h-20 object-cover'/>
        
      </div>
      <h1 className='text-center mb-3'>All eyes this way please</h1>
      <div className='flex justify-center'>
        <button
            className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
            onClick={handleBookSeats}
        >
            Book Seats
        </button>
      </div>
    </div>
  );
};

export default Seatselection;