import React from 'react'
import { AppProvider } from './context/AppContext';
import { useApp } from './context/AppContext';
import Header from './components/Header'
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ShopPage from './components/ShopPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';


function AppContent() {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
        return <ShopPage />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      default:
      return (
        <>
          <HeroSection />
        </>
      );
    }
  }

  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main></main>
      <Footer />
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
