import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function CategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
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

  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="categoryPage">
      <h2>Products for Category {categoryId}</h2>
      <div className="products">
        {products.map(product => (
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
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
