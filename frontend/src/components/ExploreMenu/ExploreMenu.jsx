import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({Category,setCategory}) => {
  return (
    <div className='explore-menu w-[80%] m-auto flex flex-col gap-[20px]' id='explore-menu'>
      <h1 className='font-semibold text-[25px] md:text-[29px] text-[#262626] '>Browse our delicious menu</h1>
        <p className='menu-text max-w-[100%] md:max-w-[60%]  '>Explore our tempting menu filled with savory starters and indulgent 
          desserts, expertly crafted to satisfy every craving and delight your taste buds!
        </p>
        <div className='explore-menu-list flex justify-between items-center gap-[30px] mx-0 text-center my-[20px] overflow-x-scroll '>
            {menu_list.map((item,index)=>{
                return (
                    <div key={index} onClick={()=>setCategory((prev)=>prev===item.menu_name?'All':item.menu_name)} className='explore-menu-list-item'>
                        <img src={item.menu_image}  alt="" className={`w-[8vw] md:min-w-[120px] min-w-[80px] cursor-pointer rounded-[50%] transition-[0.2s] ${Category===item.menu_name?'Active':''} `} />
                        <p className='mt-[10px] text-[tomato] cursor-pointer ' >{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='my-[8px] mx-0 h-[2px] border-none bg-[tomato] ' />
    </div>
  )
}

export default ExploreMenu
