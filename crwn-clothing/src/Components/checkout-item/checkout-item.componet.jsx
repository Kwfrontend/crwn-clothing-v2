import {CheckoutItemContainer,ImageContainer,RemoveButton,Arrow,Value,SetWidth,Quantity} from './checkout-item.styles.jsx';  

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem =({cartItem}) =>{
    const {clearItemFromCart,addItemToCart,removeItemFromCart} =useContext(CartContext);

    const {imageUrl,name,price,quantity} =cartItem;
    
    const clearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)

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