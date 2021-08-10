import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface KeleyaDatePickerProps {
  currentDate: any;
  showDatePicker: any;
  isDatePickerVisible: any;
  hideDatePicker: any;
  handleConfirm: any;
  testId?: string;
  btnTestId?: string;
}

const KeleyaDatePicker: React.FC<KeleyaDatePickerProps> = ({
  currentDate,
  showDatePicker,
  isDatePickerVisible,
  hideDatePicker,
  handleConfirm,
  testId,
  btnTestId,
}) => {
  return (
    <>
      <TouchableOpacity
        testID={btnTestId}
        onPress={showDatePicker}
        style={styles.datePickerContainer}>
        <Text style={styles.currentDate}>{currentDate}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        testID={testId}
      />
    </>
  );
};

const styles = StyleSheet.create({
  datePickerContainer: {
    marginVertical: 20,
    backgroundColor: '#eeeeef',
    width: 150,
    alignSelf: 'center',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.1,
  },
  currentDate: {
    color: '#2e7bf6',
    fontSize: 16,
  },
});

export default KeleyaDatePicker;
