import { Pressable, ScrollView, Text, View } from 'react-native';
import CategoryItem from './category-item';
import { connect } from 'react-redux';
import { selectCategoryItem } from '../../redux/action/categoryAction';

const Category = ({ categoryItems, selectCategoryItem }) => {
  const categoryNames = ['All', 'Fragrant Orchid', 'Common Orchid', 'Rare Orchid', 'Mutant Orchid'];

  const handleSelectItem = (item) => {
    selectCategoryItem(item);
  };

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
          <Pressable key={index} onPress={() => handleSelectItem(item)}>
            <CategoryItem name={item} currentCategory={categoryItems} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  categoryItems: state.category.selectedCategoryItem, // Access the favorite items from the Redux store
});

const mapDispatchToProps = {
  selectCategoryItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
