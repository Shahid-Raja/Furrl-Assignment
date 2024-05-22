// src/utils/api.ts
export const fetchProducts = async (page: number = 1) => {
    const response = await fetch(`https://furrl.in/api/products?page=${page}`);
    return response.json();
  };
  