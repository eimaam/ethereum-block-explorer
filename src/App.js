import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { SideNav } from './components/SideNav';
import { TopNav } from './components/TopNav';
import { Home } from './Home';
import { Footer } from "./components/Footer"
import { DataProvider } from './context/DataContext';
function App() {
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
