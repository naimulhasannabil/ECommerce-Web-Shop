import React from "react";
import { useApp } from "../context/AppContext";

const ProductModal = () => {
    const { selectedProduct, isProductModalOpen, dispatch } = useApp();

    const closeModal = () => {
    dispatch({ type: 'CLOSE_PRODUCT_MODAL' });
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: selectedProduct });
    closeModal();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (!isProductModalOpen || !selectedProduct) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover"
                  />
                </div>
                
                {/* Badges */}
                <div className="flex space-x-2">
                  {selectedProduct.discount && (
                    <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      -{selectedProduct.discount}% OFF
                    </span>
                  )}
                  {selectedProduct.isNew && (
                    <span className="bg-accent-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      New Arrival
                    </span>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-dark-gray font-playfair mb-2">
                    {selectedProduct.name}
                  </h1>
                  <p className="text-secondary-600 text-lg">{selectedProduct.description}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-secondary-600">
                    {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-primary-500">
                      {formatPrice(selectedProduct.price)}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xl text-secondary-500 line-through">
                        {formatPrice(selectedProduct.originalPrice)}
                      </span>
                    )}
                  </div>
                  {selectedProduct.originalPrice && (
                    <p className="text-sm text-accent-600 font-medium">
                      You save {formatPrice(selectedProduct.originalPrice - selectedProduct.price)}!
                    </p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <span className="inline-block bg-light-gray text-dark-gray px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProduct.category}
                  </span>
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-dark-gray">Product Details</h3>
                  <div className="space-y-2 text-sm text-secondary-600">
                    <p>• High-quality materials and craftsmanship</p>
                    <p>• Modern design that fits any interior style</p>
                    <p>• Easy to assemble with included instructions</p>
                    <p>• 2-year warranty included</p>
                    <p>• Free shipping on orders over Rp 1,000,000</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  <button
                    onClick={handleAddToCart}
                    className="w-full btn-primary text-lg py-4"
                  >
                    Add to Cart
                  </button>
                  
                  <div className="flex space-x-4">
                    <button className="flex-1 btn-outline">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Add to Wishlist
                    </button>
                    <button className="flex-1 btn-outline">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;