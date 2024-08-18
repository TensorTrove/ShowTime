import React, { useState } from 'react';
import Image1 from '../images/image1.png';
import Image2 from '../images/image2.jpg';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Add a state to store the error message

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:5001/loginInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'login_present') {
          window.location.href = 'http://localhost:3000/home';
        } else {
          setError('Email not found'); // Set the error message
        }
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred'); // Set a generic error message
      });
  };

  return (
    <div className='image_back h-screen overflow-hidden px-20 pt-1 back_img'> 
      <div className='w-24'>
        <img src={Image1} alt="logo" />
      </div>
      <div className='flex justify-center'>
        <div className='flex justify-center z-10'>
          <form onSubmit={handleSubmit} className='h-screen py-24 mt-16 w-5/5 px-28 bg-[#000000bb] text-white'>
            <h1 className='font-rubix text-white font-semibold text-4xl mb-10'>Sign In</h1>
            <input
              type="text"
              placeholder='Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className='w-96 rounded-md px-5 py-6 h-16 font-semibold text-xl bg-[#0f0f109c] border border-[#453738] mb-3'
            />
            <br />
            <div className="relative">
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder='Password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className='select-text w-96 rounded-md px-5 py-6 h-16 font-semibold text-xl bg-[#0f0f109c] border border-[#453738] mt-3 mb-3'
                autocomplete="off"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl cursor-pointer" id="eye" onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <RxEyeClosed className='hover:bg-[#3F3E3D] duration-300 transition-all rounded-full p-1' size={30} />
                ) : (
                  <RxEyeOpen className='hover:bg-[#3F3E3D] duration-300 transition-all rounded-full p-1' size={30} />
                )}
              </span>
              <style>
                {`
                  #eye {
                    padding: 10px;
                    font-size: 20px;
                  }
                  input:-webkit-autofill,
                  input:-webkit-autofill:hover,
                  input:-webkit-autofill:focus,
                  input:-webkit-autofill:active {
                    -webkit-box-shadow: 0 0 0 1000px #0f0f10 inset !important;
                    -webkit-text-fill-color: #fff !important;
                  }
                `}
              </style>
            </div>
            <br />
            {error && (
              <p className='text-red-500 text-sm mb-3'>{error}</p>
            )}
            <button className='bg-[#E50914] w-96 text-white mt-3 h-14 md:rounded md:text-xl md:font-semibold md:hover:bg-[#ac1e25] transition-all duration-300 mb-10'>
              Sign In
            </button>
            <br className='mb-20'/>
            <a href="http://localhost:3000/signup" className='text-red-500 underline-offset-4 underline'>Sign Up</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;