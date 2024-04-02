import React from 'react';
import {
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

interface KeleyaBigButtonProps {
  title: string;
  backgroundColor?: string;
  additionalStyles?: object;
  disabled?: boolean;
  buttonPress?: ((event: GestureResponderEvent) => void) | undefined;
  testId?: string;
}

const KeleyaBigButton: React.FC<KeleyaBigButtonProps> = ({
  title,
  backgroundColor = '#69c0ba',
  additionalStyles,
  buttonPress,
  disabled,
  testId,
}) => {
  return (
    <TouchableOpacity
      onPress={buttonPress}
      disabled={disabled}
      testID={testId}
      style={[
        styles.keleyaBigButtonContainer,
        {backgroundColor},
        additionalStyles,
      ]}>
      <Text style={styles.keleyaBigButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  keleyaBigButtonContainer: {
    width: Dimensions.get('screen').width - 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 8,
  },
  keleyaBigButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default KeleyaBigButton;
