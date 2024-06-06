import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/products');
        setProducts(res.data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div>
      <h1>Products</h1>
      {
        products.length === 0 ? (
          <div>No products found.</div>
        ) : (
          <ul>


            {products.map(product => (
              <li key={product._id}>{product.name} - ${product.price}</li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

export default ProductList;
