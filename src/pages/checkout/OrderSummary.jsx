import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";
import axios from "axios";

export function OrderSummary({cart, deliveryOptions, loadCart}){
  
  return (
    <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map( ( cartItem ) =>
            {
              const selectedDeliveryOption = deliveryOptions.find( ( deliveryOption ) =>
              {
                return deliveryOption.id === cartItem.delivery.id;
              } );


              // const deleteCartItem = async ()=>{
              //   await axios.delete(`/api/cart-items/${cartItem.productId}`)
              //   await loadCart();
              // }

              return (
                <div key={cartItem.productId} className="cart-item-container">
                  <div className="delivery-date">
                    {/* Delivery date: {dayjs( selectedDeliveryOption.estimatedDeliveryTimeMs ).format( 'dddd, MMMM D' )} */}
                    Delivery date: {cartItem.delivery[0].deliveryDays} Day{cartItem.delivery[0].deliveryDays === '1' ? '' : 's'}
                  </div>

                  <div className="cart-item-details-grid">
                    <img className="product-image"
                      src={cartItem.product.image} />

                    <div className="cart-item-details">
                      <div className="product-name">
                        {cartItem.product.name}
                      </div>
                      <div className="product-price">
                        {cartItem.product.price}
                      </div>
                      <div className="product-quantity">
                        <span>
                          Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        {/* <span className="delete-quantity-link link-primary" onClick={deleteCartItem}> */}
                        <span className="delete-quantity-link link-primary" >
                          Delete
                        </span>
                      </div>
                    </div>

                  <DeliveryOptions cartItem={cartItem} deliveryOption={cartItem.delivery[0].deliveryDays} loadCart={loadCart} />
                  </div>
                </div>
              );
            } )}



          </div>
  )
}