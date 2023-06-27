import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import FavoriteButton from '../favorite-button';
import { Image } from 'expo-image';

export const ProductCard = ({ navigation, item }) => {
  const handleNavigateToProductDetail = (product) => {
    navigation.navigate('Details', { product });
  };
  return (
    <TouchableWithoutFeedback onPress={() => handleNavigateToProductDetail(item)}>
      <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.price}>
          <Text style={{ fontSize: 16, color: '#4E9168' }}>{item.price}</Text>
          <FavoriteButton item={item} buttonSize={20} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    padding: 8,
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
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    fontSize: 10,
    color: '#6A6A6A',
    marginBottom: 4,
  },
});
