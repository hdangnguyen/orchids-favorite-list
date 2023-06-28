import { SELECT_CATEGORY_ITEM } from '../action/categoryAction';

const initialState = {
  selectedCategoryItem: null,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY_ITEM:
      return {
        ...state,
        selectedCategoryItem: action.payload,
      };
    default:
      return state;
  }
}
