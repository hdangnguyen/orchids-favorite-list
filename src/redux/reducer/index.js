import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
  favorite: favoriteReducer, // Add the favorite reducer to the root reducer
});

export default rootReducer;
