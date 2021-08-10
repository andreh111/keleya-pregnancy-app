import React from 'react';
import {View, StyleSheet} from 'react-native';
interface KeleyaDotProps {
  isLight: boolean;
  selected: boolean;
}

const KeleyaDot: React.FC<KeleyaDotProps> = ({isLight, selected}) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? '#69c0ba' : '#9adcd7';
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
  }
  return <View style={[styles.dot, {backgroundColor}]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});

export default KeleyaDot;
