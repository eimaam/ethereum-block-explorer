import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import { DataProvider } from './context/DataContext';
import { LoaderFullscreen } from './components/LoaderFullscreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './components/homepage/Home';
import { ErrorPage } from './components/ErrorPage';

function App() {
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2500);
  // }, [])
  // if(loading){
  //   return <LoaderFullscreen />
  // }

  return (
    <>
      <DataProvider>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </DataProvider>
      {/* react toastify */}
      <ToastContainer autoClose={3000}/>
    </>
  );
}

export default App;
