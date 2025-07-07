import axios from 'axios';
import dayjs from 'dayjs';
import { useState, useEffect, Fragment } from 'react';
import { Header } from '../../components/Header';
import './OrdersPage.css';
import { formatMoney } from '../../utils/money';

export function OrdersPage ( { cart } )
{
  const [ orders, setOrders ] = useState( [] );

  useEffect( () =>
  {
    const OrderData =async ()=> {
    const response = await axios.get( 'https://ecommerce-rest-api-f54h.onrender.com/api/v1/product-order/' )
    setOrders( response.data );
    }
    OrderData()
  }, [] );

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map( ( order ) =>
          {
            return (
              <div key={order.id} className="order-container">

                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{order.created_date}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{order.total}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <div className="order-details-grid">
                  {order.cart.cartproducts.map( ( orderProduct ) =>
                  {
                    return (
                      <Fragment key={orderProduct.product.id}>
                        <div className="product-image-container">
                          <img src={orderProduct.product.image} />
                        </div>

                        <div className="product-details">

                          <div className="product-name">
                            {orderProduct.product.name }
                          </div>
                          <div className="product-delivery-date">
                            Day to Arrivial: {orderProduct.delivery[0].deliveryDays}
                          </div>
                          <div className="product-quantity">
                            Quantity: {orderProduct.quantity}
                          </div>
                          <button className="buy-again-button button-primary">
                            <img className="buy-again-icon" src="images/icons/buy-again.png" />
                            <span className="buy-again-message">Add to Cart</span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <a href="/tracking">
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </a>
                        </div>
                      
                      </Fragment>
                    );
                  } )}



                </div>
              </div>

            );
          } )}

        </div>
      </div>
    </>
  );
}