import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header h-[34vw] w-[80%] m-auto my-[30px] mx-auto bg-contain relative' >
        <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] ">
            <h2 className='text-[3.5vw] font-bold text-white '>Place your favorite meal order here!</h2>
            <p className='text-[white] text-[1vw] md:flex hidden ' >"Indulge in the flavors you love! Browse through a variety of delicious dishes, customize your
                 order, and enjoy a hassle-free meal delivered straight to your door. Whether you're craving
                  something savory or sweet, your favorite meals are just a click away!"</p>
            <button className='border-none text-[#747474] py-[1vw] px-[2.3vw] font-semibold rounded-[50px] bg-white hover:bg-[#fffbfb] '>View Menu</button>
        </div>
    </div>
  )
}
export default Header