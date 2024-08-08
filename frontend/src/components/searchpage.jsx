import React from "react";
import { useLocation, Link } from 'react-router-dom';

const Searchpage = () => {
  const location = useLocation();
  const searchResult = location.state?.searchResult;

  return (
    <div className="text-white font-poppins pt-20 p-10 px-12 select-none">
      {searchResult && searchResult.length > 0 ? (
        <div>
          <h1 className="text-3xl font-semibold md:pb-10">Search Result:</h1>
          <div className="flex flex-wrap justify-start ">
            {searchResult.map((imagePair, index) => (
              <div key={index} className="w-1/4 px-2 group overflow-hidden">
                <div className="flex justify-center">
                  <Link to={`/booking`} state={{ movie: imagePair }}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${imagePair[0]}`}
                        alt={`Image ${index}`}
                        className=" md:w-72"
                    />
                  </Link>
                </div>
                <div className="flex justify-center">
                  <h2 className="text-white md:w-72 text-center font-medium md:text-xl md:h-20 md:pt-4 md:pb-10 bg-[#000000b5] relative md:group-hover:bottom-20 invisible opacity-0 md:group-hover:opacity-100 md:group-hover:visible md:bottom-0 transition-all duration-300">{imagePair[2]}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="md:text-4xl font-semibold text-center relative top-16">Oops! couldn't find anything :(</p>
      )}
    </div>
  );
};

export default Searchpage;