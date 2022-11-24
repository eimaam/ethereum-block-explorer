import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import { DataProvider } from './context/DataContext';
import { LoaderFullscreen } from './components/LoaderFullscreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './components/homepage/Home';
import { ErrorPage } from './components/ErrorPage';
// AOS import
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Explore } from './components/Explore';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      AOS.init({delay: 600, duration: 700, easing: 'ease-out'})
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, [])

  if(loading){
    return <LoaderFullscreen />
  }

  return (
    <>
      <DataProvider>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='explore' element={<Explore />} />
      </Routes>
      </DataProvider>
      {/* react toastify */}
      <ToastContainer autoClose={3000}/>
    </>
  );
}

export default App;
