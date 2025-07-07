import { useRef, useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";


export function Product ( { product, loadCart } )
{

  const [ quantity, setQuantity ] = useState( 1 );
  const [cartAddedMessage, setCartAddedMessage] = useState(false)
  const cartAddedMessageTs = useRef(null)

  const isCartAdded = ()=>{
    if(cartAddedMessageTs.current){
      clearTimeout(cartAddedMessageTs.current)
    }
    setCartAddedMessage(true)
    cartAddedMessageTs.current = setTimeout(()=>{
      setCartAddedMessage(false)
    }, 1500)
  }

  const addToCart = async () =>
  {
    await axios.post( 'https://ecommerce-rest-api-f54h.onrender.com/api/v1/cart-product/', {
      productId: product.id,
      quantity
    } );
    
    await loadCart();
    isCartAdded();
  };

  const selectQuantity = ( event ) =>
  {
    const quantitySelected = Number( event.target.value );
    setQuantity( quantitySelected );
  };


  return (
    <div className="product-container" 
      data-testid="product-container"
    >
      <div className="product-image-container">
        <img className="product-image"
        data-testid="product-image"
          src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">
        {product.name}
      </div>

      <div className="product-rating-container">
        <img className="product-rating-stars"
          data-testid="product-rating-stars-image"
          src={`images/ratings/rating-45.png`} />
        <div className="product-rating-count link-primary">
          4.5
        </div>
      </div>

      <div className="product-price">
        {product.price}
      </div>

      <div className="product-quantity-container">
        <select value={quantity} onChange={selectQuantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart" style={{opacity: cartAddedMessage ? 1:0}}>
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button className="add-to-cart-button button-primary"
        data-testid='add-to-car-button'
        onClick={addToCart} >
        Add to Cart
      </button>
    </div >
  );
}