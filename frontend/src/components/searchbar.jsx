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
    <div className='z-50'>
      <div className='flex justify-between pt-4 mb-3 px-20'>
        <a href="/">
          <div className='w-20'>
            <img src="https://i.pinimg.com/736x/a1/92/93/a1929317b8b7b6654ed8e48f141460ef.jpg" alt="Logo" />
          </div>
        </a>
        <div>
          <input
            type="text"
            placeholder='Search...'
            className='border rounded-l-3xl md:h-11 md:w-60 md:focus:w-96 bg-white transition-all duration-300 pl-3'
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
      </div>
    </div>
  );
};

export default Searchbar;