import { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function CategoryItem({ name = 'item' }) {
  const [isActived, setIsActived] = useState(false);

  const handlePress = () => {
    setIsActived(!isActived);
  };

  const containerStyle = isActived ? styles.activeContainer : styles.container;
  const textStyle = isActived ? styles.activeText : styles.text;

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={containerStyle}>
        <Text style={textStyle}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
