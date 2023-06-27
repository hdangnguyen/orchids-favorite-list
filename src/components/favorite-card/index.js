import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { addToFavorite } from '../../redux/action/favoriteAction';
import FavoriteButton from '../favorite-button';
import { Image } from 'expo-image';

const FavoriteCard = ({ item, navigation, addToFavorite }) => {
  const handleNavigateToProductDetail = (product) => {
    navigation.navigate('Details', { product });
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleNavigateToProductDetail(item)}>
      <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productContent}>
          <View style={styles.detailsContainer}>
            <View style={styles.detailsText}>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <FavoriteButton item={item} />
          </View>
          <Text style={styles.price}>{item.price}.00</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const mapDispatchToProps = {
  addToFavorite: addToFavorite, // Map the addToFavorite action to props
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    padding: 8,
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#AAA9A4',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productContent: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
  },
  detailsText: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 15,
  },
  category: {
    fontSize: 14,
    color: '#6A6A6A',
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    color: '#4E9168',
  },
});
export default connect(null, mapDispatchToProps)(FavoriteCard);
