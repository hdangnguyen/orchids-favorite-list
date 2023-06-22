import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.backgroundImg}>
        <Image source={require('../../../assets/images/orchids_img.png')} style={styles.img} />
        <ImageBackground
          source={require('../../../assets/images/orchids_background_img.jpeg')}
          resizeMode="cover"
        ></ImageBackground>
        <Text style={styles.heading}>Welcome to </Text>
        <Text
          style={[
            styles.heading,
            { top: '40%', fontSize: 24, fontWeight: '600', color: '#4E9168' },
          ]}
        >
          Orchids Shop
        </Text>
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
    height: 160,
    borderRadius: 20,
    backgroundColor: '#F5EFCF',
    position: 'relative',
  },
  img: {
    height: '80%',
    width: '20%',
    position: 'absolute',
    right: 50,
    bottom: 20,
  },
  heading: {
    fontSize: 16,
    width: '50%',
    position: 'absolute',
    left: 20,
    top: '25%',
    color: '#4E4E4E',
    fontWeight: 500,
  },
});
