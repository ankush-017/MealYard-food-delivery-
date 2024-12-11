import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='Footer bg-[#323232] mt-[80px] pt-[15px] text-white flex flex-col' id='footer'>

        <div className='footer-content gap-[35px] md:gap-[80px] w-[100%] grid md:grid-cols-[2fr,1fr,1fr] grid-cols-1   py-[20px] px-[8vw] '>

            <div className='footer-start'>
                <img src={assets.logo} width={250} className='rounded-full cursor-pointer ' height={60} alt="" />
                <p className='mt-3 text-[#e1e1e1] '>Discover a world of flavors with our diverse menu, crafted from fresh ingredients to satisfy 
                    every craving. Enjoy quick, seamless online ordering and fast delivery right to your door. 
                    Indulge in a culinary experience that brings the best of global cuisine to your table.
                </p> 
                <div className='social-link-image mt-3 gap-3 flex flex-row w-[35px] '>
                    <img className='cursor-pointer' src={assets.facebook_icon} alt="" />
                    <img className='cursor-pointer' src={assets.twitter_icon} alt="" />
                    <img className='cursor-pointer' src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-center flex flex-col items-start '>
                <h2 className='text-[24px] font-bold ' >Meal Yard</h2>
                <ul className='flex flex-col mt-7 font-semibold text-[#e1e1e1] '>
                    <li className='mb-[8px] cursor-pointer '>Home</li>
                    <li className='mb-[8px] cursor-pointer '>About us</li>
                    <li className='mb-[8px] cursor-pointer '>Delivery</li>
                    <li className='mb-[8px] cursor-pointer '>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-end'>
                <h2 className='text-[24px] font-bold mb-11 '>GET IN TOUCH</h2>
                <div className='text-[#e1e1e1] ' >
                    <p className='mb-2 font-semibold cursor-pointer' >+91 8076131983</p>
                    <p className='mb-2 font-semibold cursor-pointer' >mealyard@gmail.com</p>
                </div>
            </div>

        </div>
        <hr className='w-[100%] h-[2px] bg-white my-[20p] mx-auto ' />
        <p className='text-center text-[13px] mt-2 mb-3 font-semibold text-[#e1e1e1]'>Copyright 2024 @mealyard.com -All Right Reserved</p>
    </div>
  )
}

export default Footer