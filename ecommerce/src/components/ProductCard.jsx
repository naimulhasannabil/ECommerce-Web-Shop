import React from "react";
import { useApp } from "../context/AppContext";

const ProductCard = ({ product }) => {
    const { dispatch, wishlist } = useApp();

    const isInWishlist = wishlist.some(item => item.id === product.id);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const handleAddToWishlist = (e) => {
      e.stopPropagation();
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    };

    const handleAddToCompare = (e) => {
      e.stopPropagation();
      dispatch({ type: 'ADD_TO_COMPARE', payload: product });
    };
    const handleProductClick = () => {
      dispatch({ type: 'OPEN_PRODUCT_MODAL', payload: product });
    };

    const formatPrice = (price) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      }).format(price);
    };

    return (
    <div 
      onClick={handleProductClick}
      className="group relative bg-light-gray cursor-pointer transition-all duration-300 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          {product.discount && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}
          {product.isNew && (
            <span className="bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              New
            </span>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="product-overlay">
          <div className="text-center space-y-4">
            <button
              onClick={handleAddToCart}
              className="bg-white text-primary-500 font-semibold py-3 px-8 hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Add to cart
            </button>
            <div className="flex items-center justify-center space-x-6 text-white">
              <button 
                onClick={(e) => { e.stopPropagation(); }}
                className="flex items-center space-x-2 hover:text-primary-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span className="text-sm">Share</span>
              </button>
              <button 
                onClick={handleAddToCompare}
                className="flex items-center space-x-2 hover:text-primary-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                <span className="text-sm">Compare</span>
              </button>
              <button 
                onClick={handleAddToWishlist}
                className={`flex items-center space-x-2 hover:text-primary-300 transition-colors ${isInWishlist ? 'text-red-400' : ''}`}
              >
                <svg className="w-4 h-4" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm">{isInWishlist ? 'Liked' : 'Like'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-dark-gray mb-2 font-playfair">{product.name}</h3>
        <p className="text-secondary-600 text-sm mb-3">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-dark-gray">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-secondary-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-secondary-500">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;