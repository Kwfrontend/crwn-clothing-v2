import {Name,ItemDetails,CartItemContainer} from './cart-item.styles.tsx';



const CartItem = ({cartItem} ) => {
    const {name, quantity,imageUrl, price} = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Name className='name'>
                    {name}
                </Name>
                <span className='price'>
                    {quantity}x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
 )
}

export default CartItem;