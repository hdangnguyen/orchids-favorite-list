import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  favorite: favoriteReducer, // Add the favorite reducer to the root reducer
  category: categoryReducer,
});

export default rootReducer;
