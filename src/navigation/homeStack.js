import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';
import { DetailProduct } from '../components/product-detail';
import Favorite from '../components/favorite';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={DetailProduct} />
    </Stack.Navigator>
  );
}
