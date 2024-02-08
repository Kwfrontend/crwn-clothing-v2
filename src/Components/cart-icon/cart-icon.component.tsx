import {CartIconContainer,ItemCount} from './cart-icon.styles.tsx';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { useSelector,useDispatch } from 'react-redux';

import { selectIsCartOpen,selectCartCount } from '../../store/cart/cart.selector.ts';

import { setIsCartOpen } from '../../store/cart/cart.action.ts';

const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectIsCartOpen)

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon  />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;