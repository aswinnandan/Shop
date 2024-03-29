import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Ecommerce Shop</h1>
      </div>

      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          products.map(product => (
            <div key={product.id} className="product">
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={product.images[0]} alt={product.title} />
                <div className="description">
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                </div>
              </Link>
              <button className="addToCartBttn">Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Shop;
