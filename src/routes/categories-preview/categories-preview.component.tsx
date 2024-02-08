import {Fragment} from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector.ts";

import CategoryPreview from "../../Components/category-preview/category-preview.component.tsx";
import Spinner from "../../Components/spinner/spinner.component.tsx";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading)
    
    return (
        <Fragment>
            {
                isLoading ? (<Spinner/>) : (
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return  (<CategoryPreview key={title} title={title} products={products} />
                        );
                    }))
            }
        </Fragment>
    );
  };

export default CategoriesPreview; 