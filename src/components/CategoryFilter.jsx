import React from "react";
import { useApp } from "../context/AppContext";

const CategoryFilter = () => {
    const { selectedCategory, dispatch } = useApp();

  const categories = [
    { 
      id: 'All', 
      name: 'All', 
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'All Products'
    },
    { 
      id: 'Dining', 
      name: 'Dining', 
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dining Room'
    },
    { 
      id: 'Living', 
      name: 'Living', 
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Living Room'
    },
    { 
      id: 'Bedroom', 
      name: 'Bedroom', 
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Bedroom'
    },
  ];

  const handleCategoryChange = (category) => {
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => handleCategoryChange(category.id)}
          className={`group cursor-pointer transition-all duration-300 ${
            selectedCategory === category.id ? 'transform scale-105' : 'hover:transform hover:scale-105'
          }`}
        >
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold font-playfair mb-1">{category.name}</h3>
              <p className="text-sm opacity-90">{category.description}</p>
            </div>
            {selectedCategory === category.id && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;