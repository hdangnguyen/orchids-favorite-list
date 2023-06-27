import { NavigationContainer } from '@react-navigation/native';
import NavigationBottom from '../navigation/tabNavigationStack';
import { Provider } from 'react-redux';
import storePre from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function Index() {
  const { persistor, store } = storePre;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <NavigationBottom />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
