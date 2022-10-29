import React from 'react';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem'
import { useSelector,useDispatch } from 'react-redux';
import { openModal } from '../redux/features/modal/modalSlice';
export default function CartContainer() {
    const {total,amount,cartItems} = useSelector(store=>store.cart)
    const dispatch = useDispatch();
    if (amount < 1) {
      return (
        <section className='cart'>
          <header>
            <h2>your bag</h2>
            <h4 className='empty-cart'>is currently empty</h4>
          </header>
        </section>
      );
    }
  return (
    <section className='cart'>
    <header>
      <h2>your bag</h2>
    </header>
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
    <footer>
      <hr />
      <div className='cart-total'>
        <h4>
          total <span>${total.toFixed(2)}</span>
        </h4>
      </div>
      <Button className='clear-btn' variant="danger" onClick={()=>dispatch(openModal())}>
      clear cart
      </Button>
    </footer>
  </section>
  )
}
