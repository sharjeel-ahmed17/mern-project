import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    localStorage.removeItem('token');
    alert('Logged out successfully');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
