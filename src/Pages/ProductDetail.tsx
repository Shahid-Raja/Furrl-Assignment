// src/pages/ProductDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Fetch product details using the id
  return <div>Product Detail Page for product {id}</div>;
};

export default ProductDetail;
