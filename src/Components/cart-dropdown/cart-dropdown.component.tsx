import {CartDropdownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles.tsx';

import CartItem from '../cart-item/cart-item.component.tsx';

import Button from '../button/button.component.tsx'

import { selectCartItems } from '../../store/cart/cart.selector.ts';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const CartDropdown = ( ) => {
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const goToCheckoutHandler =() => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => (
                <CartItem key={item.id}  cartItem={item}/>
                ))) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;