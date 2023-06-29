export const SELECT_CATEGORY_ITEM = 'SELECT_CATEGORY_ITEM'; // Action Types

export const selectedCategoryItem = (item) => ({
  type: SELECT_CATEGORY_ITEM,
  payload: item,
});
