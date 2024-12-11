import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import LoginPopup from './components/LoginpopUp/LoginPopup.jsx';

const App = () => {
  
  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className=''>
        <Navbar setShowLogin={setShowLogin} />
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}


export default App;