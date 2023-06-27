import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  REMOVE_ALL_FAVORITE,
} from '../action/favoriteAction';

const initialState = {
  favoriteItems: [],
};

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, action.payload],
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter((item) => item.id !== action.payload.id),
      };
    case REMOVE_ALL_FAVORITE:
      return {
        ...state,
        favoriteItems: [],
      };
    default:
      return state;
  }
}
