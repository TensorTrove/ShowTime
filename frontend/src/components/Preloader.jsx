import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import './preloader.css'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container flex justify-center">
      <div className='w-44'>
        <span><img src="https://i.pinimg.com/564x/bc/2a/05/bc2a05e398a55163568f0f9b8a66b27a.jpg" alt="Logo" /></span>
      </div>
      </div>
    </div>
  );
};

export default PreLoader;