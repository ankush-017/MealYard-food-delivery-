import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem} from '../../Slice/CartSlice'
import { getTotalAmount } from '../../Slice/CartSlice'

import { food_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector(getTotalAmount);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='cart mt-[100px] w-[80%] mx-auto '>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr className='' />
                {/* Display items only if they are in the cart */}
                {food_list.map((item, index) => {
                    const cartItem = cartItems[item._id];
                    if (cartItem && cartItem.quantity > 0) {
                        return (
                            <>
                            <div key={item._id} className="cart-items-title cart-items-item">
                                <img src={item.image} className='w-[50px]' alt="" />
                                <p>{item.name}</p> {/* Title */}
                                <p><span className='font-semibold'>₹</span>{item.price}</p>
                                <p>{cartItem.quantity}</p>
                                <p><span className='font-semibold'>₹</span>{item.price * cartItem.quantity}</p>
                                <p onClick={()=>dispatch(removeItem(item._id))} className='cursor-pointer'>x</p>
                                {/* <button onClick={() => dispatch(removeItem(item._id))}>Remove</button> */}
                            </div>
                            <hr className='h-[1px] border-none bg-[#e2e2e2] ' />
                            </>
                        );
                    }
                    return null; // Only render items in the cart
                })}
            </div>
            <div className={`cart-bottom mt-[80px] flex md:flex-row flex-col-reverse justify-between `}>
                <div className="cart-total flex flex-col gap-[20px] ">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p><span className='font-semibold'>₹ </span>{totalAmount}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p><span className='font-semibold'>₹ </span>{45}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b><span className='font-semibold'>₹ </span>{totalAmount+45}</b>
                        </div>
                    </div>
                    <button className='border-none text-[white] bg-[tomato] py-[12px] px-0 rounded-[4px] cursor-pointer' onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
                </div>
                    <div className="cart-promocode flex-1 ">
                        <div>
                            <p className='text-[#555]'>If you have a promocode, Enter it here</p>
                            <div className='cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px] '>
                                <input type="text" placeholder='promo code' />
                                <button className='bg-black border-none text-white rounded-[4px]'>Submit</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Cart