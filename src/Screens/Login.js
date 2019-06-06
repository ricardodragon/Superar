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
        Button,
        AsyncStorage                  
} from 'react-native';


type Props = {};
const width = Dimensions.get('screen').width;
export default class Login extends Component<Props> {
    constructor(){
        super();        
    }

    entrar(){
        AsyncStorage.setItem('usuario', 'ricardo');
        AsyncStorage.setItem('id', 1);
    }
    
    render(){
        return(
            <View>
                <Button title="Entrar" onPress={this.entrar.bind(this)} />
            </View>
        );
    }
}