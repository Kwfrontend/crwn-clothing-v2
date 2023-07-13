import { Routes,Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../../Components/category/category.component';

import './shop.styles.jsx' ;

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview/> } />
            <Route path=':category' element={<Category /> } />
        </Routes>
    );
  };

export default Shop; 