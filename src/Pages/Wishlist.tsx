import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Wishlist: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = 'https://furrl.in/wishlist';
  }, []);

  return <div>Redirecting to wishlist...</div>;
};

export default Wishlist;
