import { useState,useEffect,Fragment} from 'react';

import ProductCard from '../product-card/product-card.component';

import { useParams } from 'react-router-dom';

import {CategoryTitle,CategoryContainer} from  './category.styles.jsx'

import { useSelector } from "react-redux/es/hooks/useSelector";

import { selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () =>{
   const  {category} = useParams();
   const categoriesMap = useSelector(selectCategoriesMap);
   const [products,setProducts] = useState(categoriesMap[category]);

   useEffect(()=>{
    setProducts(categoriesMap[category]);
   },[category,categoriesMap])
   return(
    <Fragment>
    <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
    <CategoryContainer>
        {   products &&
            products.map((product)=><ProductCard key={product.id} product={product }/>)
        }
    </CategoryContainer>
    </Fragment>
   )
}

export default Category;