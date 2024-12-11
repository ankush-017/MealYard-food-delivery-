import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
    
    const [currState,setCurrState] = useState("Login");

  return (
    <div className='login-pop-up absolute z-10 w-full h-full bg-[#00000090] grid'>
      <form className="pop-up-container place-self-center text-[#808080] flex bg-white flex-col gap-[25px] py-[25px] px-[30px] 
      text-[14px] rounded-[8px]">
        <div className="login-pop-up-title flex justify-between items-center text-[#000] ">
            <h2 className='text-[21px] font-bold'>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} className='cursor-pointer w-[16px]' src={assets.cross_icon} alt="" />
        </div>
        <div className="login-pop-up-inputs flex flex-col gap-[20px] ">
            {currState === "Sign Up"?<input type="text" placeholder='Your name' required/>:<></>}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button className='border-none p-[10px] rounded-[4px] text-white bg-[tomato] text-[15px] cursor-pointer ' >{currState==="Login"?"Login":"Create account"}</button>
        <div className='login-popup-condition flex items-start gap-[8px] mt-[-12px] '>
            <input type="checkbox" className='mt-[5px]' required/>
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Sign Up"?
        <p>Already have an account? <span className='cursor-pointer text-[tomato] font-semibold ' onClick={()=>setCurrState("Login")}>Login here</span></p>:
        <p>Create a new account? <span className='cursor-pointer text-[tomato] font-semibold ' onClick={()=>setCurrState("Sign Up")}>Click here</span></p>}
      </form>
    </div>
  )
}
export default LoginPopup