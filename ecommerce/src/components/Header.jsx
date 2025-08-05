import React, {useState} from "react";
import { useApp } from '../context/AppContext';

const Header = () => {
    const { cart, dispatch, searchQuery, currentPage, wishlist, user } = useApp();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = wishlist.length;

    const handleSearch = (e) => {
        dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value });
    };

    const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const handleNavigation = (page) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
    setIsMobileMenuOpen(false);
  };

  const toggleLoginModal = () => {
    dispatch({ type: 'TOGGLE_LOGIN_MODAL' });
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold text-dark-gray font-playfair">Furniro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`font-medium transition-colors ${currentPage === 'home' ? 'text-primary-500' : 'text-dark-gray hover:text-primary-500'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('shop')}
              className={`font-medium transition-colors ${currentPage === 'shop' ? 'text-primary-500' : 'text-dark-gray hover:text-primary-500'}`}
            >
              Shop
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className={`font-medium transition-colors ${currentPage === 'about' ? 'text-primary-500' : 'text-dark-gray hover:text-primary-500'}`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className={`font-medium transition-colors ${currentPage === 'contact' ? 'text-primary-500' : 'text-dark-gray hover:text-primary-500'}`}
            >
              Contact
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleLoginModal}
              className="p-2 text-dark-gray hover:text-primary-500 transition-colors"
              title={user ? `Welcome, ${user.name}` : 'Login'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button 
              onClick={() => handleNavigation('shop')}
              className="p-2 text-dark-gray hover:text-primary-500 transition-colors md:hidden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              onClick={() => handleNavigation('wishlist')}
              className="relative p-2 text-dark-gray hover:text-primary-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button 
              onClick={toggleCart}
              className="relative p-2 text-dark-gray hover:text-primary-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 004 16h16M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark-gray hover:text-primary-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => handleNavigation('home')}
                  className={`text-left font-medium py-2 transition-colors ${currentPage === 'home' ? 'text-primary-500' : 'text-dark-gray hover:text-primary-500'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavigation('shop')}
                  className={`text-left font-medium py-2 transition-colors ${currentPage === 'shop' ? 'text-primary-500' : 'text-dark-gray hover:text-primary-500'}`}
                >
                  Shop
                </button>
                <button 
                  onClick={() => handleNavigation('about')}
                  className={`text-left font-medium py-2 transition-colors ${currentPage === 'about' ? 'text-primary-500' : 'text-dark-gray hover:text-primary-500'}`}
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className={`text-left font-medium py-2 transition-colors ${currentPage === 'contact' ? 'text-primary-500' : 'text-dark-gray hover:text-primary-500'}`}
                >
                  Contact
                </button>
              </nav>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="p-2 text-dark-gray hover:text-primary-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleNavigation('wishlist')}
                    className="relative p-2 text-dark-gray hover:text-primary-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {wishlistCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {wishlistCount}
                      </span>
                    )}
                  </button>
                </div>
                <button 
                  onClick={toggleCart}
                  className="relative p-2 text-dark-gray hover:text-primary-500 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 004 16h16M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                  </svg>
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;