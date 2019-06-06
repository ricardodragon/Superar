/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Feed from './src/components/Feed';
import {name as appName} from './app.json';
import { Navigation } from "react-native-navigation";

Navigation.registerComponent(appName, () => Feed);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: appName
      }
    }
  });
});
// AppRegistry.registerComponent(appName, () => Feed);
