import React from 'react';
import {
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import KeleyaBigButton from '../Components/KeleyaBigButton';
import KeleyaTitle from '../Components/KeleyaTitle';
import {LocalizationContext} from '../Context/LocalizationContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Screens/RootStackParamList';

type InitialScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Initial'
>;

const InitialContainer: React.FC<{}> = () => {
  const {t} = React.useContext<any>(LocalizationContext);
  const navigation = useNavigation<InitialScreenProp>();
  return (
    <ImageBackground
      style={styles.mainBg}
      source={require('../Assets/Images/first-intro-image.png')}>
      <View style={[styles.subContainer, {top: 30}]}>
        <Image
          resizeMode="center"
          style={styles.keleyaLogo}
          source={require('../Assets/Images/keleya-logo.png')}
        />
        <KeleyaTitle text={t('initial_title')} />
      </View>

      <View style={[styles.subContainer, {bottom: 30}]}>
        <KeleyaBigButton
          title={t('get_started')}
          testId={'get-started-btn'}
          buttonPress={() => navigation.navigate('Signup')}
        />
        <TouchableOpacity
          testID={'login-btn'}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.btnLogin}>{t('or_login')}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainBg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnLogin: {
    fontSize: 18,
    fontWeight: '600',
    top: 15,
  },
  keleyaLogo: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
});

export default InitialContainer;
