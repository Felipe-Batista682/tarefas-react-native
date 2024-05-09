import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import topo from './src/componentes/topo';
import lista from './src/componentes/lista';

export default function App() {
  return (
    <>
    <topo/>
    <view style={estilos.container}>
      <Lista/>
    </view>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
