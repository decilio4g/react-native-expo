import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';

import DefaultScreen from './src/components/DefaultScreen';
import Routes from './src/Route';

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {
  console.tron.log({
    curso: "Decilio"
  });

  return (
    <DefaultScreen>
      <Routes />
    </DefaultScreen>);
}
