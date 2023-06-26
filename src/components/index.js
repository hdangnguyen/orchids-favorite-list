import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import NavigationBottom from '../navigation/tabNavigationStack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Index() {
  return (
    <NavigationContainer>
      <NavigationBottom />
    </NavigationContainer>
  );
}
