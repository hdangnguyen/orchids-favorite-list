import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function FavoriteCard({ item, navigation }) {
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
            <TouchableOpacity>
              <Icon name="heart-outline" size={28} color="#4E9168" />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>{item.price}.00</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    padding: 8,
    marginHorizontal: 15,
    marginTop: 20,
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
