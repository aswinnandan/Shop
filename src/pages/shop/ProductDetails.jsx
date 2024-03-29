import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './productDetails.css'; 

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const addToCart = () => {
  };

  return (
    <div className="productDetails">
      <h2>{product.title}</h2>
      <div className="productImages">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index}`} />
        ))}
      </div>
      <p>Description: {product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <button className="addToCartBttn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
