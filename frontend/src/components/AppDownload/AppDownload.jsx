import React from 'react';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download w-[100%] flex flex-col items-center mt-[100px] ' id='mobile-app'>
        <p className='text-center text-[30px] font-semibold ' >For Better Experience Download <br/> MealYard App </p>

        <div className='flex flex-row mt-[40px] items-center gap-3'>
                <img src={assets.play_store} className='md:w-[30vw] transition-[0.5s] hover:scale-[1.11] w-[120px] max-w-[180px] cursor-pointer'  alt="" />
                <img src={assets.app_store} className='md:w-[30vw] transition-[0.5s] hover:scale-[1.11] w-[120px] max-w-[180px] cursor-pointer '  alt="" />
        </div>
      
    </div>
  )
}


export default AppDownload