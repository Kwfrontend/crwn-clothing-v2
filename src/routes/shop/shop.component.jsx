import { Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCategoriesStart } from '../../store/categories/category.actions.js'; 
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../../Components/category/category.component';

import './shop.styles.jsx' ;

const Shop = () => {
const dispatch = useDispatch();

useEffect(()=>{
        dispatch(fetchCategoriesStart());
},[]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview/> } />
            <Route path=':category' element={<Category /> } />
        </Routes>
    );
  };

export default Shop; 