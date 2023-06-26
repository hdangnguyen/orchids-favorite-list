import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { appColors } from '../../utils/appColor';

export const DetailProduct = ({ route }) => {
  const { name, image, price, description, category } = route.params.product;
  return (
    <ScrollView
      style={{
        backgroundColor: appColors.white,
      }}
    >
      <View>
        <Image source={{ uri: image }} style={styles.productImage} />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            flexDirection: 'column',
            gap: 5,
            marginBottom: 15,
            marginTop: 8,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={styles.price}>{price}.00</Text>
            <TouchableOpacity>
              <Icon name="heart-outline" size={28} color="#4E9168" />
            </TouchableOpacity>
          </View>
          <Text style={styles.productName}>{name}</Text>
        </View>
        <View>
          <Text style={[styles.description, { marginBottom: 8, fontSize: 16, fontWeight: 600 }]}>
            Description
          </Text>
          <Text style={styles.description}>{description}</Text>
          <Text
            style={[
              styles.description,
              { marginVertical: 8, fontSize: 16, fontWeight: 400, color: appColors.primary },
            ]}
          >
            {category}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: '100%',
    height: 350,
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
    color: appColors.darkGray,
  },
  price: {
    fontSize: 28,
    fontWeight: '600',
    color: appColors.primary,
  },
  productName: {
    fontSize: 24,
    fontWeight: '600',
    color: appColors.darkGray,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 10,
    color: appColors.darkGray,
  },
});
