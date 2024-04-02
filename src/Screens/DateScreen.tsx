import React, {useContext} from 'react';
import {Image, View, Dimensions, StyleSheet} from 'react-native';
import moment from 'moment-timezone';
import {KeleyaBigButton, KeleyaTitle, KeleyaDatePicker} from '../Components';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {InitialScreenProp} from './RootStackParamList';
import {RootStore} from '../Redux/Store';
import {setUserDate} from '../Redux/Actions/Auth/AuthActions';
import {LocalizationContext} from '../Context/LocalizationContext';

const date = moment(new Date()).format('MMM DD YYYY');

export default function DateScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState<any>(date);
  const dispatch = useDispatch();
  const navigation = useNavigation<InitialScreenProp>();
  const authState = useSelector((state: RootStore) => state.auth);
  const {t} = useContext<any>(LocalizationContext);

  console.log(authState);

  const setUDate = () => {
    dispatch(() => setUserDate(currentDate));
    navigation.navigate('Workout');
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (pickedDate: any) => {
    hideDatePicker();
    setCurrentDate(moment(pickedDate).format('MMM DD YYYY'));
  };
  return (
    <View testID="date-screen" style={styles.mainContainer}>
      <Image
        style={styles.imageDueDate}
        source={require('../Assets/Images/due-date-background-image.jpg')}
      />
      <View>
        <KeleyaTitle text={t('title_date_screen')} color="#000" />

        <KeleyaDatePicker
          currentDate={currentDate}
          handleConfirm={handleConfirm}
          showDatePicker={showDatePicker}
          isDatePickerVisible={isDatePickerVisible}
          hideDatePicker={hideDatePicker}
          testId={'date-picker'}
          btnTestId={'show-date-picker-btn'}
        />
      </View>
      <View style={styles.bottomView}>
        <KeleyaBigButton
          testId="continue-btn"
          buttonPress={() => setUDate()}
          title={t('continue')}
          backgroundColor="#69c0ba"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageDueDate: {
    width: '100%',
    height: Dimensions.get('screen').height / 2,
  },
  bottomView: {
    bottom: 36,
  },
});
