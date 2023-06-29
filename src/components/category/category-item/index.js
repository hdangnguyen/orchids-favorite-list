import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

const CategoryItem = ({ name, categoryItems }) => {
  const containerStyle = categoryItems === name ? styles.activeContainer : styles.container;
  const textStyle = categoryItems === name ? styles.activeText : styles.text;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#DBD9D0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginRight: 6,
  },
  activeContainer: {
    borderWidth: 1,
    borderColor: '#4E9168',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginRight: 6,
    backgroundColor: '#4E9168',
  },
  text: {
    color: '#B1B0A9',
    fontSize: 16,
  },
  activeText: {
    color: '#fff',
    fontSize: 16,
  },
});

const mapStateToProps = (state) => ({
  categoryItems: state.category.selectedCategoryItem, // Access the favorite items from the Redux store
});

export default connect(mapStateToProps)(CategoryItem);
