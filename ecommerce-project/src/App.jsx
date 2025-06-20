import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/ordersPage';
import { TrackingPage } from './pages/TrackingPage';

import './App.css';

function App ()
{

  const [ cart, setCart ] = useState( [] );
  useEffect( () =>
  {
    axios.get( '/api/cart-items' )
      .then( ( response ) =>
      {
        setCart( response.data );
      } );
  } );

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage />}></Route>
      <Route path="/tracking" element={<TrackingPage />}></Route>
    </Routes>

  );
}

export default App;
