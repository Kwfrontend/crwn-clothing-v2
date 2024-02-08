import {Footer, ProductCardContainer} from './product-card.styles.tsx';

import Button, {BUTTON_TYPES_CLASSES} from '../button/button.component.tsx';

import {useSelector,useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action.ts';
import { selectCartItems } from '../../store/cart/cart.selector.ts';

const ProductCard = ({product}) => {
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();
    const {name ,price , imageUrl}  = product;  

    const addProductToCart = () => dispatch(addItemToCart(cartItems,product));

    return (
    <ProductCardContainer> 
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </Footer>
        <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart} >Add to cart</Button>
    </ProductCardContainer>
 );
}   

export default ProductCard;