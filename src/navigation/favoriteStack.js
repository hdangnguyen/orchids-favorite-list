import { createStackNavigator } from '@react-navigation/stack';
import { DetailProduct } from '../components/product-detail';
import Favorite from '../components/favorite';

const Stack = createStackNavigator();

export default function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Details" component={DetailProduct} />
    </Stack.Navigator>
  );
}
