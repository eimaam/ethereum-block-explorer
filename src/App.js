import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { SideNav } from './components/SideNav';
import { TopNav } from './components/TopNav';
import { Home } from './Home';
import { Footer } from "./components/Footer"
function App() {
  return (
    <>
      <TopNav />
      <SideNav />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
