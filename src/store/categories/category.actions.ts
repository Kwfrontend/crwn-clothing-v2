import { createAction ,Action ,ActionWithPayload,withMatcher} from '../../utils/reducer/reducer.utils.ts';
import CATEGORIES_ACTION_TYPES,{Category} from './category.types.ts'

export type fetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type fetchCategoriesSuccess= ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>

export type fetchCategoriesFailed= ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>


export type CategoryAction = fetchCategoriesStart|fetchCategoriesSuccess|fetchCategoriesFailed  

// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = withMatcher(():fetchCategoriesStart=>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[] ): fetchCategoriesSuccess =>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray));

export const fetchCategoriesFailed = withMatcher((error :Error) : fetchCategoriesFailed=>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));
