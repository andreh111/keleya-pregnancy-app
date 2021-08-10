import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import colors from '../Theme/colors';
interface KeleyaTitleProps {
  text: string;
  color?: string;
  size?: number;
  value?: boolean;
  onValueChange?: any;
  disabled?: any;
  checkboxRendered?: boolean;
  checkboxTestId?: string;
}

const KeleyaTitle: React.FC<KeleyaTitleProps> = ({
  text,
  color = '#4a4a4a',
  size = 20,
  value,
  onValueChange,
  disabled,
  checkboxRendered = false,
  checkboxTestId,
}) => {
  if (checkboxRendered) {
    return (
      <View style={styles.mainContainer}>
        {checkboxRendered && (
          <CheckBox
            disabled={disabled}
            value={value}
            onValueChange={onValueChange}
            boxType="square"
            style={styles.checkbox}
            tintColor={colors.LIGHT_TEAL}
            onTintColor={colors.LIGHT_TEAL}
            onCheckColor={colors.LIGHT_TEAL}
            testID={checkboxTestId}
          />
        )}
        <Text style={{color, fontSize: size}}>{text}</Text>
      </View>
    );
  }

  return (
    <Text
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        textAlign: checkboxRendered ? 'left' : 'center',
        color,
        fontSize: size,
      }}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: '10%',
  },
  checkbox: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
});

export default KeleyaTitle;
