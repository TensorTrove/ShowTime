import React from "react";
import { useLocation } from 'react-router-dom';

const Searchpage = () => {
  const location = useLocation();
  const searchResult = location.state?.searchResult;

  return (
    <div>
  {searchResult && (
    <div>
      <h1>Search Result:</h1>
      <ul>
        {searchResult.map((movie, index) => (
          <li key={index}>
            <h2>{movie[2]}</h2>
            <p>{movie[3]}</p>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie[0]}`}
                alt={`Image ${index}`}
                className="px-2 hover:z-50"
            />
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
  );
};

export default Searchpage;