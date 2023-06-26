import { FlatList, Text, TouchableOpacity, Alert, Button } from 'react-native';
import product from '../../../assets/data/orchid-data.json';
import FavoriteCard from '../favorite-card';
import { appColors } from '../../utils/appColor';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Favorite({ navigation }) {
  const showConfirmDialog = () => {
    return Alert.alert('Confirm Delete ', 'Are you sure you want to remove all of your favorites', [
      // The "Yes" button
      {
        text: 'Delete',
        onPress: () => {
          setShowBox(false);
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: 'Cancel',
      },
    ]);
  };
  return (
    <FlatList
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => showConfirmDialog()}
          style={{ marginHorizontal: 20, marginTop: 20 }}
        >
          <Text style={{ fontSize: 18, fontWeight: 600, color: appColors.redOrange }}>
            <Icon name="trash-outline" size={20} color={appColors.redOrange} /> Remove All
          </Text>
        </TouchableOpacity>
      }
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#fff' }}
      data={product}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FavoriteCard item={item} navigation={navigation} />}
    ></FlatList>
  );
}
