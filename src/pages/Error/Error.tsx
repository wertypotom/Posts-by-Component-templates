import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Page you are looking for does not exist</h1>
      <div className='error-goback' onClick={() => navigate(-1)}>
        Click here to go back
      </div>
    </div>
  );
};

export default Error;
