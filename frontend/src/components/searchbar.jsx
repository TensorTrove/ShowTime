import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [movieName, setMovieName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    const movieJson = { movie: movieName };
    fetch('http://127.0.0.1:5001/searchmovie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movieJson)
    })
      .then(response => response.json())
      .then(data => {
        setSearchResult(data);
        navigate('/search', { state: { searchResult: data } });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='absolute right-3 z-50'>
      <div className='flex justify-end pt-6'>
        <div>
          <input
            type="text"
            placeholder='Search...'
            className='border rounded-l-3xl md:h-11 md:w-60 md:focus:w-80 bg-white transition-all duration-300 pl-3'
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <button
            type='submit' 
            className='relative top-1.5 p-3 text-white bg-[#272424] rounded-r-3xl border-spacing-0.5'
            onClick={handleSearchClick}
          >
            <FaSearch size={25} />
          </button>
        </div>
        <div className='md:w-28'>

        </div>
      </div>
    </div>
  );
};

export default Searchbar;