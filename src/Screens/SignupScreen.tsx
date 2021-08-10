import {KeleyaBigButton, KeleyaTextInput, KeleyaTitle} from '../Components';
import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import colors from '../Theme/colors';
import {useEffect} from 'react';
import {useContext} from 'react';
import {LocalizationContext} from '../Context/LocalizationContext';
import {useDispatch} from 'react-redux';
import {registerUser} from '../Redux/Actions/Auth/AuthActions';
import {useNavigation} from '@react-navigation/native';
import {InitialScreenProp} from './RootStackParamList';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {height} = Dimensions.get('screen');

const SignupScreen: React.FC<{}> = () => {
  const {t} = useContext<any>(LocalizationContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [acceptPrivacy, setAcceptPrivacy] = React.useState(false);
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [buttonColor, setButtonColor] = React.useState(colors.WARM_GREY);
  const [disabled, setDisabled] = React.useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation<InitialScreenProp>();

  useEffect(() => {
    if (email !== '' && password !== '' && acceptPrivacy && acceptTerms) {
      setButtonColor(colors.PALE_TEAL);
      setDisabled(false);
    } else {
      setButtonColor(colors.WARM_GREY);
      setDisabled(true);
    }
  }, [email, password, acceptPrivacy, acceptTerms]);

  const register = () => {
    dispatch(registerUser(email, password));
    navigation.navigate('Name');
  };

  return (
    <View testID="signup-screen" style={styles.mainContainer}>
      <KeyboardAwareScrollView>
        <View>
          <Image
            testID="img"
            resizeMode="center"
            style={styles.bgImg}
            source={require('../Assets/Images/authentication-background-image.jpg')}
          />
          <KeleyaTitle text={t('title_account_details')} />

          <KeleyaTextInput
            value={email}
            testId="email"
            onValueChange={(e: string) => setEmail(e)}
            placeholder="example@gmail.com"
          />
          <KeleyaTextInput
            value={password}
            testId="password"
            onValueChange={(p: string) => setPassword(p)}
            placeholder={t('enterpassword')}
          />

          <KeleyaTitle
            text={t('title_read_policy')}
            size={14}
            value={acceptPrivacy}
            onValueChange={() => setAcceptPrivacy(!acceptPrivacy)}
            checkboxRendered={true}
            checkboxTestId={'accept-privacy'}
          />
          <KeleyaTitle
            text={t('title_accept_terms')}
            size={14}
            value={acceptTerms}
            onValueChange={() => setAcceptTerms(!acceptTerms)}
            checkboxRendered={true}
            checkboxTestId={'accept-terms'}
          />
        </View>

        <KeleyaBigButton
          buttonPress={() => register()}
          backgroundColor={buttonColor}
          disabled={disabled}
          title={t('continue')}
          testId="continue-btn"
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  bgImg: {
    width: '100%',
    height: height / 2,
  },
});
export default SignupScreen;
