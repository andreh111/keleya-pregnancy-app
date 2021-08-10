import React from 'react';
import {View, Dimensions, ImageBackground, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {KeleyaBigButton, KeleyaTitle} from '../Components';
import {useDispatch, useSelector} from 'react-redux';
import {RootStore} from '../Redux/Store';
import {LocalizationContext} from '../Context/LocalizationContext';
import {useNavigation} from '@react-navigation/native';
import {InitialScreenProp} from './RootStackParamList';
import {setUserWorkout} from '../Redux/Actions/Auth/AuthActions';

export default function WorkoutFrequenceScreen() {
  const activitiesState = useSelector((state: RootStore) => state.activity);

  const [selectedActivity, setSelectedAcitivity] = React.useState<any>(
    activitiesState.activities![2],
  );
  const {t} = React.useContext<any>(LocalizationContext);

  const dispatch = useDispatch();
  const navigation = useNavigation<InitialScreenProp>();

  const setUWorkout = () => {
    dispatch(() => setUserWorkout(selectedActivity));
    navigation.navigate('Success');
  };

  return (
    <View testID="workout-screen" style={styles.backgroundMain}>
      <ImageBackground
        resizeMode="center"
        style={styles.backgroundMain}
        source={require('../Assets/Images/workout-goal-background-image.jpg')}>
        <View style={{top: '30%'}}>
          <KeleyaTitle text={t('activity_workout_title')} />
        </View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <Picker
          testID="workout-activity"
          selectedValue={selectedActivity}
          onValueChange={(itemValue: string) =>
            setSelectedAcitivity(itemValue)
          }>
          {activitiesState.activities?.map((activity: string) => {
            return (
              <Picker.Item key={activity} label={activity} value={activity} />
            );
          })}
        </Picker>

        <KeleyaBigButton
          buttonPress={() => setUWorkout()}
          title={t('continue')}
          testId="continue-btn"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundMain: {
    width: '100%',
    height: Dimensions.get('screen').height / 1.5,
  },
  bottomView: {
    bottom: 35,
  },
});
