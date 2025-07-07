import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';

import './App.css';

function App ()
{

  const [ cart, setCart ] = useState( [] );
  const loadCart  = async () => {
    const response = await axios.get( 'https://ecommerce-rest-api-f54h.onrender.com/api/v1/cart-product/')
    setCart( response.data );
  }
  useEffect( () =>
  {
    loadCart()
  },[]);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} />}></Route>
      <Route path="/tracking" element={<TrackingPage />}></Route>
    </Routes>

  );
}

export default App;
