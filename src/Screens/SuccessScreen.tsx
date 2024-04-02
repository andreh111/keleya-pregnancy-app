import {KeleyaBigButton, KeleyaTitle} from '../Components';
import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useContext} from 'react';
import {LocalizationContext} from '../Context/LocalizationContext';

export default function SuccessScreen() {
  const {t} = useContext<any>(LocalizationContext);
  return (
    <ImageBackground
      source={require('../Assets/Images/notifications-background-image.jpg')}
      style={styles.backgroundMain}>
      <View style={styles.topView}>
        <Icon name="notifications-outline" size={40} color={'#808080'} />
        <KeleyaTitle text={t('success_title')} />
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity>
          <Text style={styles.skipBtn}>{t('skip')}</Text>
        </TouchableOpacity>

        <KeleyaBigButton title={t('allow_notifications')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundMain: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    top: '15%',
  },
  bottomView: {
    alignItems: 'center',
    bottom: 30,
  },
  skipBtn: {
    fontSize: 15,
    fontWeight: '400',
    margin: 15,
  },
});
