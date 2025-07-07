import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useNavigate } from "react-router";

export function PaymentSummary ( { paymentSummary, loadCart } )
{
  const navigate = useNavigate();
  const createOrder = async()=> {
    await axios.post(`https://ecommerce-rest-api-f54h.onrender.com/api/v1/product-order/`, {
      cartId: paymentSummary[0].id
    })
    await loadCart();
    navigate('/orders')
  }
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">
        Payment Summary
      </div>

      {
        
        paymentSummary  && (
          <>
            <div className="payment-summary-row">
              <div>Items ({paymentSummary.totalItems}):</div>
              <div className="payment-summary-money">${paymentSummary[0].cart_product_total}</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">${paymentSummary[0].delivery_fee_total}</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">$0</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">$0</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">${paymentSummary[0].overall_total}</div>
            </div>

            <button className="place-order-button button-primary" 
            onClick={createOrder}>
           
              Place your order
            </button>
          </>
        )
      }


    </div>
  );
}