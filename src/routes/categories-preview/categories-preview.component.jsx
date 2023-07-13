import { CategoriesContext} from "../../contexts/catergories.context";

import { useContext ,Fragment} from "react";

import CategoryPreview from "../../Components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const {categoriesMap} =useContext(CategoriesContext);
    return (
        <Fragment>
                {Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return  (<CategoryPreview key={title} title={title} products={products} />
                    );
                })}
        </Fragment>
    );
  };

export default CategoriesPreview; 