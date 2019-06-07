/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform,   
        View,
        Dimensions,         
        AsyncStorage,                                 
} from 'react-native';
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

//import AsyncStorage from 
type Props = {};
const width = Dimensions.get('screen').width;
export default class Login extends Component<Props> {
    constructor(){
        super();        
    }

    async entrar(){        
        await AsyncStorage.setItem('usuario', 'ricardo');         
        const value = await AsyncStorage.getItem('usuario');                          
        Navigation.setRoot({
            root: { stack: { children: [{ component: { name: 'feed', options: {  topBar: {  height: 0  },   },   },  }]   }   }
        });   
    }

    render(){
        return(
            <View >
                {/* <Button title="Entrar" onPress={this.entrar.bind(this)} /> */}
                <Icon.Button backgroundColor="#3b5998" onPress={this.entrar.bind(this)}>
                    Entrar
                </Icon.Button>
            </View>
        );
    }
}
