import {KeleyaBigButton, KeleyaTextInput, KeleyaTitle} from '../Components';
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {LocalizationContext} from '../Context/LocalizationContext';
import {useDispatch} from 'react-redux';
import {LoginUser} from '../Redux/Actions/Auth/AuthActions';
import colors from '../Theme/colors';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {InitialScreenProp} from './RootStackParamList';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const isPasswordField = true;

const SigninScreen: React.FC<{}> = () => {
  const [showPassword, setShowPassword] = React.useState(
    isPasswordField ? true : false,
  );
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [buttonColor, setButtonColor] = React.useState(colors.WARM_GREY);
  const [disabled, setDisabled] = React.useState(false);
  const {t} = React.useContext<any>(LocalizationContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (email !== '' && password !== '') {
      setButtonColor(colors.PALE_TEAL);
      setDisabled(false);
    } else {
      setButtonColor(colors.WARM_GREY);
      setDisabled(true);
    }
  }, [email, password]);

  const navigation = useNavigation<InitialScreenProp>();
  const handleLogin = () => {
    dispatch(LoginUser(email, password));
    navigation.navigate('Success');
  };

  return (
    <View testID="login-screen" style={styles.mainContainer}>
      <KeyboardAwareScrollView>
        <View>
          <Image
            resizeMode="center"
            style={styles.bgImg}
            source={require('../Assets/Images/authentication-background-image.jpg')}
          />
          <KeleyaTitle text={t('welcomeback')} />

          <KeleyaTextInput
            testId="email"
            value={email}
            onValueChange={(e: string) => setEmail(e)}
            placeholder="example@gmail.com"
          />
          <KeleyaTextInput
            testId="password"
            showPassword={showPassword}
            value={password}
            onValueChange={(p: string) => setPassword(p)}
            setShowPassword={() => setShowPassword(!showPassword)}
            isPasswordField={isPasswordField}
            placeholder={t('enterpassword')}
          />
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity>
            <KeleyaTitle size={18} text={t('forgotpassword')} />
          </TouchableOpacity>

          <KeleyaBigButton
            testId="continue-btn"
            backgroundColor={buttonColor}
            disabled={disabled}
            buttonPress={() => {
              handleLogin();
            }}
            title={t('continue')}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bgImg: {
    width: '100%',
  },
  bottomView: {
    // bottom: 15,
    marginTop: 20,
  },
});

export default SigninScreen;
