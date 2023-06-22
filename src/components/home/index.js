import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const handleNavigateToFavorite = () => {
    navigation.navigate('Favorites'); // Navigates to the 'Favorites' screen
  };
  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  backgroundImg: {
    margin: 20,
    height: 180,
    borderRadius: 20,
    backgroundColor: '#E8F1EC',
    position: 'relative',
  },
  img: {
    height: '80%',
    width: '20%',
    position: 'absolute',
    right: 40,
    bottom: 20,
  },
  heading: {
    fontSize: 14,
    width: '60%',
    color: '#4E4E4E',
    fontWeight: 500,
  },
  headingContent: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    top: '25%',
    left: 20,
    gap: 3,
  },
  headingButton: {
    backgroundColor: '#4E9168',
    alignSelf: 'flex-start',
    padding: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
