import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from './checkout.styles.jsx' ;

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../Components/checkout-item/checkout-item.componet';


const Checkout = () => {
    const {cartItems,cartTotal} = useContext(CartContext);
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
        </CheckoutContainer>
    )
}

export default Checkout;