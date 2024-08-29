import React, { useState, useEffect, useRef } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from './searchbar';

const Finalbill = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const objectId = queryParams.get('objectId');
    const [finalBill, setFinalBill] = useState({});
    const toastRef = useRef(false);

  useEffect(() => {
    axios.post(`https://65.2.130.52:5001/get_finalbill`, {
      objectId: objectId // Pass the objectId to the request body
    })
      .then(response => {
        if (!toastRef.current) {
          toast.success('Tickets confirmed', {
            position: "top-center",
            style: {
              border: '1px solid #713200',
              padding: '24px',
              color: '#713200',
              tabSize:'20rem',
              borderRadius:'50px',
            },
            iconTheme: {
              primary: '#713200',
              secondary: '#FFFAEE',
            },
            duration:4000,
          });
          toastRef.current = true;
        }
        setFinalBill(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      
  }, [objectId]);
  

  return (
    <div className='text-white px-24 py-3 h-screen'>
      <Searchbar/>
      <Toaster/>
      <div className='flex justify-start pt-12'>
        <p className='inline text-center text-5xl font-semibold font-poppins mb-14'>Final Bill</p>
      </div>
      <div className='flex justify-between px-4'>
        <div className='border w-fit'>
        {Object.keys(finalBill).length > 0 && (
            <div className='p-12'>
              {Object.keys(finalBill).map(key => (
                <p key={key} className='w-fit text-4xl font-medium py-3'>
                  <span className='text-yellow-300'>
                    {key === 'Bill_id' ? 'Bill ID' : key}
                  </span> : {finalBill[key]}
                </p>
              ))}
            </div>
          )}
          </div>
          <div>
            <p className='text-4xl font-poppins font-semibold mb-3'>Thank you for choosing us</p>
            <p className='text-xl font-poppins font-medium text-center'>Make a note of your bill id</p>
          </div>
        </div>
    </div>
  );
};

export default Finalbill;