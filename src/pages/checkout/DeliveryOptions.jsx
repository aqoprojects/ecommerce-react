import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import axios from "axios";

export function DeliveryOptions ( { cartItem, deliveryOption, loadCart } )
{
  // const updateDiliveryOption = async (e) =>
  // {
  //   await axios.put( `http://localhost:8000/api/v1/product-delivery/${cartItem.delivery[0].id}`, {
  //     deliveryDays: e.target.value
  //   } );
  //   await loadCart();
  // };
  return (

    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>

      <div  className="delivery-option" >
        <div className="delivery-option" >
          <input type="radio"
            checked={'7' === cartItem.delivery[0].deliveryDays}
            onChange={() => { }}
            className="delivery-option-input"
            value="7"
            name={`delivery-option-${cartItem.productId}`} />
             <div>
              {/* <div className="delivery-option-date">
                Days Left: {deliveryOption}
              </div> */}
              <div className="delivery-option-price">
                Free Shipping
              </div>
            </div>
          <div>
            <div className="delivery-option" >
              <input type="radio"
                checked={'3' === cartItem.delivery[0].deliveryDays}
                onChange={() => { }}
                className="delivery-option-input"
                value="3"
                name={`delivery-option-${cartItem.productId}`} />
                 <div>
              {/* <div className="delivery-option-date">
                Days Left: {deliveryOption}  
              </div> */}
              <div className="delivery-option-price">
                $3-Shipping
              </div>
            </div>
              <div>

                <div className="delivery-option" >
                  <input type="radio"
                    checked={'1' === cartItem.delivery[0].deliveryDays}
                    onChange={() => { }}
                    className="delivery-option-input"
                    value="1"
                    name={`delivery-option-${cartItem.productId}`} />
                   <div>
              {/* <div className="delivery-option-date">
                Days Left: {deliveryOption}
              </div> */}
              <div className="delivery-option-price">
                $8-Shipping
              </div>
            </div>
                </div>



              </div>


            </div>
          </div>
        </div>
      </div>
      </div>
      )
};