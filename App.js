import React from 'react';
import BottomNavigator from './src/routes/BottomNavigator'
import store from './src/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <BottomNavigator />
    </Provider>
  );
}
