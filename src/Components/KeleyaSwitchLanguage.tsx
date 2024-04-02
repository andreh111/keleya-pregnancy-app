import React from 'react';
import {useContext} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {LocalizationContext} from '../Context/LocalizationContext';

export default function KeleyaSwitchLanguage() {
  const {locale, setLocale} = useContext<any>(LocalizationContext);
  return (
    <TouchableOpacity
      onPress={() => {
        if (locale === 'en') {
          setLocale('de');
        } else {
          setLocale('en');
        }
      }}>
      <Image
        style={{width: 30, height: 30}}
        source={
          locale === 'en'
            ? require('../Assets/Images/en.png')
            : require('../Assets/Images/de.png')
        }
      />
    </TouchableOpacity>
  );
}
