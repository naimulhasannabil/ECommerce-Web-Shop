import React from 'react'
import { AppProvider } from './context/AppContext';
import { useApp } from './context/AppContext';
import Header from './components/Header'
import Footer from './components/Footer';


function AppContent() {
  

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
