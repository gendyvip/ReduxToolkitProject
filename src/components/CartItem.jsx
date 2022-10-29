import React from 'react'
import { ChevronDown,ChevronUp } from '../icons'
import { removeItem,increase,decrease } from '../redux/features/cart/cartSlice'
import { useDispatch} from 'react-redux'
export default function CartItem({item}) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
        <img src={item.img} alt={item.title} />
        <div>
          <h4>{item.title}</h4>
          <h4 className="item-price">${parseFloat(item.price*item.amount).toFixed(2)}</h4>
          <button className="remove-btn" onClick={()=>dispatch(removeItem(item.id))}>remove</button>
        </div>
        <div>
          <button className='amount-btn' onClick={()=>dispatch(increase(item.id))}>
            <ChevronUp/>
          </button>
          <p className='amount'>{item.amount}</p>
          <button className='amount-btn' onClick={()=>
            {
              if(item.amount===1)
              {
                dispatch(removeItem(item.id))
              }
              dispatch(decrease(item.id))}}>
            <ChevronDown/>
          </button>
        </div>
    </article>
  )
}