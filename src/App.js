import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContainer from './components/CartContainer';
import { calculateTotal, getCartItems } from './redux/features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Modaly from './components/Modaly';
import { Loader } from './icons';
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((calculateTotal()))
  }
    , [cartItems])
  useEffect(() => {
    dispatch((getCartItems()))
  }
    , [])
  if (isLoading) {
    return (
      <>
        <Loader />
        <h1 className='loading'>Loading</h1>
      </>
    )
  }
  return (
    <>
      <NavBar />
      <CartContainer />
      <Modaly />
    </>
  );
}

export default App;
