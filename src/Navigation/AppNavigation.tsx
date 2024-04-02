import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, TouchableOpacity} from 'react-native';
import SignupScreen from '../Screens/SignupScreen';
import SigninScreen from '../Screens/SigninScreen';
import NameScreen from '../Screens/NameScreen';
import DateScreen from '../Screens/DateScreen';
import WorkoutFrequenceScreen from '../Screens/WorkoutFrequenceScreen';
import SuccessScreen from '../Screens/SuccessScreen';
import InitialScreen from '../Screens/InitialScreen';
import {LocalizationContext} from '../Context/LocalizationContext';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const {locale, setLocale} = React.useContext<any>(LocalizationContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          title: '',
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: '#FFF',
          },
        }}>
        <Stack.Screen
          name="Initial"
          component={InitialScreen}
          options={{
            title: '',
            headerRight: () => (
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
            ),
          }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="Date" component={DateScreen} />
        <Stack.Screen name="Workout" component={WorkoutFrequenceScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
