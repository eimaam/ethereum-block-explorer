import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { SideNav } from './components/SideNav';
import { TopNav } from './components/TopNav';
import { Home } from './Home';
import { Footer } from "./components/Footer"
import { DataProvider } from './context/DataContext';
import { LoaderFullscreen } from './components/LoaderFullscreen';
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
      <TopNav />
      <SideNav />
    <DataProvider>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </DataProvider>
    <Footer />
    </>
  );
}

export default App;
