import { FlatList, Text, View } from 'react-native';
import { ProductCard } from './product-card';

export default function ProductGrid({ data }) {
  return (
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
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between', display: 'flex', gap: 10 }}
          style={{ gap: 10 }}
          renderItem={({ item }) => <ProductCard item={item} />}
        />
      </View>
    </View>
  );
}
