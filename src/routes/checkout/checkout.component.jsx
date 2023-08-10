import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from './checkout.styles.jsx' ;

import CheckoutItem from '../../Components/checkout-item/checkout-item.componet';

import { useSelector } from 'react-redux';
import { selectCartItems,selectCartTotal } from '../../store/cart/cart.selector.js';

import PaymentForm from '../../Components/payment-form/payment-form.component.jsx';


const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Qauntity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem)=>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
               
         ))}
         <Total>Total R{cartTotal}</Total>
         <PaymentForm/>
        </CheckoutContainer>
    )
}

export default Checkout;