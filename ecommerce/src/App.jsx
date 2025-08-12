import React from 'react'
import { AppProvider } from './context/AppContext';
import { useApp } from './context/AppContext';
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ShopPage from './components/ShopPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import WishlistPage from './components/WishlistPage';
import Cart from './components/Cart';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';


function AppContent() {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
        return <ShopPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'wishlist':
        return <WishlistPage />
      default:
      return (
        <>
          <HeroSection />
          <section className='section-padding bg-white'>
            <div className='container-custom'>
              <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-dark-gray mb-4'>Browse The Range</h2>
                <p className='text-secondary-600 max-w-2xl mx-auto'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est?
                </p>
              </div>
              <CategoryFilter />
            </div>
          </section>
          <section className='section-padding bg-light-gray'>
            <div className='container-custom'>
              <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-dark-gray mb-4'>Our Products</h2>
              </div>
              <ProductGrid />
            </div>
          </section>
        </>
      );
    }
  };

  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <Cart />
      <LoginModal />
    </div>
  );
}
function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
