import React from 'react'
import './Placeorder.css'
import { getTotalAmount } from '../../Slice/CartSlice'
import { useSelector } from 'react-redux';

const Placeorder = () => {

  const totalAmount = useSelector(getTotalAmount);

  return (
    <form action="" className="place-order items-start flex justify-between mt-[100px] gap-[50px] w-[80%] m-auto ">
      <div className="place-order-left w-full">
        <p className='text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='street' />
        <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total flex flex-col gap-[20px] ">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p><span className='font-semibold'>₹ </span>{totalAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p><span className='font-semibold'>₹ </span>{45}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b><span className='font-semibold'>₹ </span>{totalAmount + 45}</b>
            </div>
          </div>
          <button className='border-none text-[white] bg-[tomato] py-[12px] px-0 rounded-[4px] mt-[30px] cursor-pointer' onClick={() => navigate('/order')} >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}
export default Placeorder