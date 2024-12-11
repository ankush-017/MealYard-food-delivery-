import React from 'react'
import './FoodDisplay.css';
import {useSelector} from 'react-redux';
import FoodItem from './FoodItem';

const FoodDisplay = () => {

    const foodList = useSelector((state)=>state.list);
    // const cartItem = useSelector((state)=>state.cart);

  return (
    <div className='foodDisplay w-[80%] m-auto mt-[30px] '>
      <h1 className='text-[29px] font-semibold '>Popular meals around you</h1>
      <div className='food-display-img mt-[30px] grid gap-[35px] '>
        {foodList.map((item,index)=>{
            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default FoodDisplay