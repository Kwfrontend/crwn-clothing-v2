import {CheckoutItemContainer,ImageContainer,RemoveButton,Arrow,Value,SetWidth,Quantity} from './checkout-item.styles.tsx';  

import { useSelector,useDispatch } from 'react-redux';
import { clearItemFromCart,addItemToCart,removeItemFromCart } from '../../store/cart/cart.action.ts';

import { selectCartItems } from '../../store/cart/cart.selector.ts';


const CheckoutItem =({cartItem}) =>{
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const {imageUrl,name,price,quantity} =cartItem;
    
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem));

    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
            <SetWidth>{name}</SetWidth>
            <Quantity>
                <Arrow onClick={removeItemHandler} >&#10094;</Arrow>       
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
                </Quantity>
            <SetWidth>{price}</SetWidth>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
 );
}


export default CheckoutItem