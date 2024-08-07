import React from "react";
import { useLocation } from 'react-router-dom';

const Searchpage = () => {
  const location = useLocation();
  const searchResult = location.state?.searchResult;

  return (
    <div className="text-white font-poppins pt-16 p-8">
  {searchResult && (
    <div>
      <h1 className="text-3xl font-semibold">Search Result:</h1>
      <div className="flex flex-wrap justify-start ">
        {searchResult.map((imagePair, index) => (
          <div key={index} className="w-1/4 px-2">
            <div className="flex justify-center">
                <h2 className="text-white md:w-72 text-center font-medium md:text-xl md:h-12 bg-[#000000a7] relative 
                ">{imagePair[2]}</h2>
            </div>
            
            <div className="flex justify-center">
                <img
                    src={`https://image.tmdb.org/t/p/w500${imagePair[0]}`}
                    alt={`Image ${index}`}
                    className=" md:w-72"
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
  );
};

export default Searchpage;