import { FlatList, Text, TouchableOpacity, Alert, View } from 'react-native';
import { Image } from 'expo-image';
import FavoriteCard from '../favorite-card';
import { appColors } from '../../utils/appColor';
import Icon from 'react-native-vector-icons/Ionicons';
import { removeAllFavorite } from '../../redux/action/favoriteAction';
import { connect } from 'react-redux';

const Favorite = ({ navigation, favoriteItems, removeAllFavorite }) => {
  const showConfirmDialog = () => {
    return Alert.alert('Confirm Delete ', 'Are you sure you want to remove all of your favorites', [
      {
        text: 'Cancel',
      },
      // The "Yes" button
      {
        text: 'Delete',
        onPress: () => {
          removeAllFavorite();
        },
      },
    ]);
  };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {favoriteItems.length !== 0 ? (
        <FlatList
          ListHeaderComponent={
            <TouchableOpacity onPress={() => showConfirmDialog()} style={{ margin: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: 600, color: appColors.redOrange }}>
                <Icon name="trash-outline" size={20} color={appColors.redOrange} /> Remove All
              </Text>
            </TouchableOpacity>
          }
          showsVerticalScrollIndicator={false}
          data={favoriteItems}
          style={{ backgroundColor: '#fff' }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FavoriteCard item={item} navigation={navigation} />}
        ></FlatList>
      ) : (
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../../../assets/images/empty_item.png')}
            style={{
              width: 300,
              height: 250,
            }}
          />
          <Text style={{ fontSize: 20, fontWeight: 500, color: appColors.inactive }}>
            Your favorite list is empty
          </Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  favoriteItems: state.favorite.favoriteItems, // Access the favorite items from the Redux store
});
const mapDispatchToProps = {
  removeAllFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
