import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Category from '../category';
import ProductGrid from '../product-grid';
import product from '../../../assets/data/orchid-data.json';

export default function Home() {
  const navigation = useNavigation();

  const handleNavigateToFavorite = () => {
    navigation.navigate('Favorites'); // Navigates to the 'Favorites' screen
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <View style={styles.backgroundImg}>
            <Image source={require('../../../assets/images/orchids_img.png')} style={styles.img} />
            <View style={styles.headingContent}>
              <Text style={styles.heading}>Welcome to </Text>
              <Text style={[styles.heading, { fontSize: 26, fontWeight: '600', color: '#4E9168' }]}>
                Orchids Shop
              </Text>
              <TouchableOpacity onPress={handleNavigateToFavorite} style={styles.headingButton}>
                <Text style={{ fontSize: 12, color: '#F5EFCF' }}>Go to Favorite</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Category data={product} />
        </>
      }
      ListFooterComponent={<ProductGrid data={product} />}
      style={styles.container}
    ></FlatList>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
  },
  backgroundImg: {
    margin: 20,
    height: 160,
    borderRadius: 20,
    backgroundColor: '#E8F1EC',
    position: 'relative',
  },
  img: {
    height: '85%',
    width: '20%',
    position: 'absolute',
    right: 40,
    bottom: 10,
  },
  heading: {
    fontSize: 16,
    width: '60%',
    color: '#4E4E4E',
    fontWeight: 500,
  },
  headingContent: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    top: '20%',
    left: 20,
    gap: 3,
  },
  headingButton: {
    backgroundColor: '#4E9168',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
