/**
 * @format
 */

import Feed from './src/components/Feed';
import { Navigation } from "react-native-navigation";
import Login from './src/Screens/Login';
import Foto from './src/Screens/Foto';
import EnviarFoto from './src/Screens/EnviarFoto';

Navigation.registerComponent('login', () => Login);
Navigation.registerComponent('feed', () => Feed);
Navigation.registerComponent('foto', () => Foto);
Navigation.registerComponent('enviarfoto', () => EnviarFoto);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{          
          component: {
            
            name: 'login',            
            options: {              
              topBar: {
                height: 0,                                
              },              
            },                               
          },
        }]
      }
    }
  });
});
// AppRegistry.registerComponent(appName, () => Feed);
