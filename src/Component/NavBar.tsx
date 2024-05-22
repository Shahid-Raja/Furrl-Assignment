// src/components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <Link to="/wishlist">
        <button>Wishlist</button>
      </Link>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </nav>
  );
};

export default NavBar;
