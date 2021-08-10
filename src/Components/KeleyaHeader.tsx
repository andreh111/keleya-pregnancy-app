import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import KeleyaSwitchLanguage from './KeleyaSwitchLanguage';

export default function KeleyaHeader() {
  return (
    <View style={styles.header}>
      <KeleyaSwitchLanguage />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 20,
    top: StatusBar.currentHeight! + 50,
  },
});
