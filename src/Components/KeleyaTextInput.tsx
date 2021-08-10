import React from 'react';
import {
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('screen');

interface KeleyaTextInputProps {
  placeholder: string;
  isPasswordField?: boolean;
  showPassword?: boolean;
  setShowPassword?: ((event: GestureResponderEvent) => void) | undefined;
  onValueChange: any;
  value: string;
  testId?: string;
  additionalStyles?: any;
}

const KeleyaTextInput: React.FC<KeleyaTextInputProps> = ({
  placeholder,
  showPassword,
  setShowPassword,
  isPasswordField,
  value,
  onValueChange,
  testId,
  additionalStyles,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        testID={testId}
        value={value}
        onChangeText={onValueChange}
        placeholder={placeholder}
        secureTextEntry={showPassword}
        style={[styles.input, additionalStyles]}
      />
      {isPasswordField && (
        <Icon onPress={setShowPassword} name="eye" size={20} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 0.5,
    width: width - 80,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 18,
  },
});

export default KeleyaTextInput;
