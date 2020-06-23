/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {BarcodeScanner} from './components/BarcodeScanner';

function App() {
  return (
    <View style={styles.body}>
      <BarcodeScanner />
      <Button style={styles.button} title="ESCANEAR" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.light,
    flex: 1,
  },
  button: {
    backgroundColor: Colors.primary,
  },
});

export default App;
