/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import {ThemesProvider} from './context';

const Root = () => (
  <I18nextProvider i18n={i18n}>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </I18nextProvider>
);

AppRegistry.registerComponent(appName, () => Root);
