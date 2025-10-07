import React from "react";
import { useApp } from "../context/AppContext";
import ProductCard from "./ProductCard";

const WishlistPage = () => {
    const { wishlist, dispatch } = useApp();

    const clearWishlist = () => {
        wishlist.forEach(item => {
            dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
        });
    };

    return (
    <div className="min-h-screen bg-white">
      {/* Wishlist Header */}
      <div className="bg-cream py-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-dark-gray font-playfair mb-4">My Wishlist</h1>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Your favorite furniture pieces saved for later
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg className="w-24 h-24 mx-auto text-secondary-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-dark-gray mb-2">Your wishlist is empty</h3>
              <p className="text-secondary-600 mb-6">Start adding products you love to your wishlist</p>
              <button 
                onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: 'shop' })}
                className="btn-primary"
              >
                Browse Products
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-dark-gray">
                {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'} in Wishlist
              </h2>
              <button
                onClick={clearWishlist}
                className="text-red-500 hover:text-red-600 font-medium transition-colors"
              >
                Clear Wishlist
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlist.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;