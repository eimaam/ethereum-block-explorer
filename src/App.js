import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import { DataProvider } from './context/DataContext';
import { LoaderFullscreen } from './components/LoaderFullscreen';
// react toast package
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// react toast package end
import { Home } from './components/homepage/Home';
import { ErrorPage } from './components/ErrorPage';
// AOS import
import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS import end
import { Explore } from './components/Explore/Explore';
import { Login } from './components/AuthPages/Login';
import { SignUp } from './components/AuthPages/SignUp';
import { AccountSettings } from './components/AuthPages/AccountSettings';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoutes } from './Routes/PrivateRoutes';
import { Wallets } from './components/Wallets/Wallets';
import { ExploreResult } from './components/Explore/ExploreResult';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      AOS.init({delay: 600, duration: 700, easing: 'ease-out'})

      // show loading animation for 2.5 secs
      setTimeout(() => {
        setLoading(false)
      }, 2000);
  }, [])

  if(loading){
    return <LoaderFullscreen />
  }


  return (
    <>
    <AuthProvider>
      <DataProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='explore' element={<Explore />} />
        <Route path='explore/:exploreAddress' element={<ExploreResult />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />

        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='wallets' element={<Wallets />} />
          <Route path='settings' element={<AccountSettings />} />
        </Route>

      </Routes>
      </DataProvider>
    </AuthProvider>
      {/* react toastify */}
      <ToastContainer autoClose={3000}/>
    </>
  );
}

export default App;
