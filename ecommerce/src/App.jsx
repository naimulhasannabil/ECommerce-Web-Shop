import React from 'react'
import Header from './components/Header'
import { AppProvider } from './context/AppContext';
import { useApp } from './context/AppContext';


function AppContent() {
  

  return (
    <div className='min-h-screen bg-white'>
      <Header />
    </div>
  )
}
function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
