import React, { useEffect } from 'react';
import { assets } from '../../assets/assets';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../Slice/CartSlice';

const FoodItem = ({ id, name, price, description, image }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Check if the cart item exists using its ID
  const cartItem = cartItems[id];
  const itemCount = cartItem ? cartItem.quantity : 0;

  useEffect(() => {
    if (itemCount > 0) {
      console.log(`Item Added/Updated - ID: ${id}, Name: ${name}, Quantity: ${itemCount}`);
    } 
  }, [cartItems,id,name]);

  return (
    <div className='food-item rounded-[15px] w-[100%] shadow-[0px_0px_10px_#00000015] m-auto '>
      <div className='food-item-img-container relative '>
        <img src={image} className='rounded-t-[15px] w-[100%]' alt="" />
        {
          itemCount === 0
          ? <img className='add absolute w-[35px] right-[15px] bottom-[15px] cursor-pointer rounded-[50%]' 
            onClick={() => dispatch(addItem({ id, name, price, description, image }))} 
            src={assets.add_icon_white} alt="" />
          : <div className='food-item-counter absolute right-[15px] bg-white p-[6px] rounded-[50px] bottom-[15px] flex items-center gap-[10px]'>
              <img className='w-[25px]' onClick={() => dispatch(removeItem(id))} src={assets.remove_icon_red} alt="" />
              <p className='font-semibold'> {itemCount} </p>
              <img className='w-[25px]' onClick={() => dispatch(addItem({ id, name, price, description, image }))} 
                src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="food-item-image-info p-[20px] flex flex-col">
        <div className="food-name-rating flex justify-between items-center">
          <p className='font-semibold text-[20px]'>{name}</p>
          <img src={assets.rating_starts} className='w-[75px] h-[16px]' alt="" />
        </div>
        <p className='text-[13px] my-[10px] text-[#676767]'>{description}</p>
        <p className='font-semibold text-[tomato] text-[22px]'>₹{price}</p>
      </div>
    </div>
  );
};
export default FoodItem;