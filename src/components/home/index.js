import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Category from '../category';
import product from '../../../assets/data/orchid-data.json';
import { ProductCard } from '../product-card';
import { Image } from 'expo-image';
import { connect } from 'react-redux';

const Home = ({ navigation, categoryItems }) => {
  const handleNavigateToFavorite = () => {
    alert('Welcome to App :v');
  };

  // Filter products based on selected category
  const filteredProducts = categoryItems
    ? product.filter((product) =>
        categoryItems === 'All' ? true : product.category === categoryItems
      )
    : product;

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
                <Text style={{ fontSize: 12, color: '#F5EFCF' }}>Welcome</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Category data={product} />
        </>
      }
      ListFooterComponent={
        <View
          style={{
            marginVertical: 24,
            marginHorizontal: 20,
            display: 'flex',
            gap: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 600 }}>All Orchids</Text>
          <View>
            <FlatList
              data={filteredProducts}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between', display: 'flex', gap: 10 }}
              style={{ gap: 10 }}
              renderItem={({ item }) => <ProductCard item={item} navigation={navigation} />}
            />
          </View>
        </View>
      }
      style={styles.container}
    ></FlatList>
  );
};
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

const mapStateToProps = (state) => ({
  categoryItems: state.category.selectedCategoryItem, // Access the favorite items from the Redux store
});

export default connect(mapStateToProps)(Home);
