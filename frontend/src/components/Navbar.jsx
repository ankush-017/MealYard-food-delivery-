import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
import {assets} from '../assets/assets'
import { useSelector } from 'react-redux';
import { getTotalAmount } from '../Slice/CartSlice';

const Navbar = ({setShowLogin}) => {

  const totalAmount = useSelector(getTotalAmount)

  return (
    <nav className='text-black px-[20px] md:w-[80%] m-auto justify-between items-center flex flex-wrap'>
        <Link to='/' ><img src={assets.logo} width={300} height={80} alt="" className='mt-3' /></Link>

        <div className='md:flex gap-[25px] text-[18px] hidden'>
        <Link to='/' className={({isActive}) => isActive ? 'border-solid transition-[0.5s] pb-[2px] border-b-[2px] border-[#000]' : '' } >Home</Link>
        <a href='#explore-menu'>Menu</a>
        <a href='#mobile-app' className={({isActive}) => isActive ? 'border-solid transition-[0.5s] pb-[2px] border-b-[2px] border-[#000]' : '' } >Mobile-app</a>
        <a href='#footer' className={({isActive}) => isActive ? 'border-solid transition-[0.5s] pb-[2px] border-b-[2px] border-[#000]' : '' } >Contact us</a>
        </div>

        <div className='nav-right flex items-center gap-[40px]'>
            <img src={assets.search_icon} alt="" className='cursor-pointer' />
            <div className="navbar-search-icon relative">
                <Link to='/cart' ><img src={assets.basket_icon} className='cursor-pointer' alt="" /></Link>
                <div className={totalAmount===0?"":`dot min-w-[10px] min-h-[10px] absolute rounded-[5px] bg-[tomato] top-[-8px] right-[-8px]`}></div>
            </div>
            <button onClick={()=>setShowLogin(true)} className='bg-transparent rounded-[50px] transition-[0.3s] text-[18px] text-[#49557e]
             border-solid border-[1px] px-[30px] py-[10px] hover:bg-[tomato] hover:text-white border-[#800303] '>sign in</button>
        </div>

    </nav>
  )
}
export default Navbar;