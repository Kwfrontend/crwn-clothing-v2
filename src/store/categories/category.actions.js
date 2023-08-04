import { createAction } from '../../utils/reducer/reducer.utils';
import CATEGORIES_ACTION_TYPES from '../categories/category.types'

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = ()=>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray ) =>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error ) =>
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
