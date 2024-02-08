import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from './checkout.styles.tsx' ;

import CheckoutItem from '../../Components/checkout-item/checkout-item.componet.tsx';

import { useSelector } from 'react-redux';
import { selectCartItems,selectCartTotal } from '../../store/cart/cart.selector.ts';

import PaymentForm from '../../Components/payment-form/payment-form.component.tsx';


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