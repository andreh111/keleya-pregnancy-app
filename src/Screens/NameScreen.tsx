import {KeleyaBigButton, KeleyaTextInput, KeleyaTitle} from '../Components';
import React, {useContext} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUserName} from '../Redux/Actions/Auth/AuthActions';
import {useState} from 'react';
import {RootStore} from '../Redux/Store';
import {useNavigation} from '@react-navigation/native';
import {InitialScreenProp} from './RootStackParamList';
import {LocalizationContext} from '../Context/LocalizationContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../Theme/colors';
const {height} = Dimensions.get('screen');

export default function NameScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<InitialScreenProp>();
  const [name, setName] = useState('');
  const [buttonColor, setButtonColor] = useState(colors.WARM_GREY);
  const [disabled, setDisabled] = useState(false);
  const authState = useSelector((state: RootStore) => state.auth);
  const {t} = useContext<any>(LocalizationContext);

  console.log(authState);

  const setUName = () => {
    dispatch(setUserName(name));
    navigation.navigate('Date');
  };
  React.useEffect(() => {
    if (name !== '') {
      setButtonColor(colors.PALE_TEAL);
      setDisabled(false);
    } else {
      setButtonColor(colors.WARM_GREY);
      setDisabled(true);
    }
  }, [name]);
  return (
    <KeyboardAwareScrollView
      testID="name-screen"
      contentContainerStyle={styles.mainContainer}>
      <View>
        <Image
          resizeMode="center"
          style={styles.bgImg}
          source={require('../Assets/Images/couch_smile.jpg')}
        />
        <KeleyaTitle size={24} text={t('title_name_screen')} />
        <KeleyaTextInput
          value={name}
          testId="name-input"
          onValueChange={(value: string) => setName(value)}
          placeholder={t('your_name')}
          additionalStyles={styles.inputName}
        />
      </View>
      <View>
        <KeleyaBigButton
          testId="continue-btn"
          buttonPress={() => setUName()}
          title={t('continue')}
          backgroundColor={buttonColor}
          disabled={disabled}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  bgImg: {
    width: '100%',
    height: height / 2,
    bottom: 30,
  },
  inputName: {textAlign: 'center'},
});
