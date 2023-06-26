import { ScrollView, Text, View } from 'react-native';
import CategoryItem from './category-item';

export default function Category(data) {
  const categoryNames = ['All', 'Fragrant Orchid', 'Common Orchid', 'Rare Orchid', 'Mutant Orchid'];

  return (
    <View
      style={{
        marginLeft: 20,
        display: 'flex',
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 600 }}>Category</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoryNames.map((item, index) => (
          <CategoryItem key={index} name={item} />
        ))}
      </ScrollView>
    </View>
  );
}
