import React from 'react';

import i18n from 'i18n-js';
import {LocalizationContext} from './src/Context/LocalizationContext';
import * as RNLocalize from 'react-native-localize';
import {en} from './src/Locales/en';
import {de} from './src/Locales/de';
import AppNavigation from './src/Navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

i18n.fallbacks = true;
i18n.translations = {en, de};

const App = () => {
  const [locale, setLocale] = React.useState(
    RNLocalize.getLocales()[0].languageCode,
  );
  const localizationContext = React.useMemo(
    () => ({
      t: (scope: string, options: object) =>
        i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );
  return (
    <Provider store={store}>
      <LocalizationContext.Provider value={localizationContext}>
        <AppNavigation />
      </LocalizationContext.Provider>
    </Provider>
  );
};

export default App;
