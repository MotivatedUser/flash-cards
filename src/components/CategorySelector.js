import React from 'react';
import '../../src/App.css'

const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => {
  const handleChange = (e) => {
    onSelectCategory(e.target.value);
  };

  return (
    <div className="category-selector">
        <label htmlFor='category-select'>Category:</label>
      <select id='category-select' value={selectedCategory} onChange={handleChange}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
