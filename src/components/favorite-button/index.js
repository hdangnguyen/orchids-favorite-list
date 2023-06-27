import React from 'react';
import { connect } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../redux/action/favoriteAction';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { appColors } from '../../utils/appColor';

const FavoriteCard = ({
  item,
  favoriteItems,
  addToFavorite,
  removeFromFavorite,
  buttonSize = 28,
}) => {
  const isFavorite = favoriteItems.some((favoriteItem) => favoriteItem.id === item.id); // Check if the item is in the favorite list
  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorite(item); // Remove from favorites
    } else {
      addToFavorite(item); // Add to favorites
    }
  };

  return (
    <TouchableOpacity onPress={handleToggleFavorite}>
      <Icon
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={buttonSize}
        color={isFavorite ? appColors.loveColor : appColors.primaryColor}
      />
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  favoriteItems: state.favorite.favoriteItems, // Access the favorite items from the Redux store
});

const mapDispatchToProps = {
  addToFavorite,
  removeFromFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard);
