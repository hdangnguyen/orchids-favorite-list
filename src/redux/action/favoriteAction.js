export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'; // Action Types
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE'; // Action Types
export const REMOVE_ALL_FAVORITE = 'REMOVE_ALL_FAVORITE'; // Action Types

export const addToFavorite = (item) => ({
  type: ADD_TO_FAVORITE,
  payload: item,
});

export const removeFromFavorite = (item) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: item,
});

export const removeAllFavorite = () => ({
  type: REMOVE_ALL_FAVORITE,
});
