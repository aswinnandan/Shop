import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="categoryList">Loading...</div>;
  }

  if (error) {
    return <div className="categoryList">Error: {error}</div>;
  }

  return (
    <div className="categoryList">
      <h2>Category List</h2>
      <div className="categories">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <Link to={`/category/${category.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={category.image} alt={category.name} />
              <div className="category-name">
                <h3>{category.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
