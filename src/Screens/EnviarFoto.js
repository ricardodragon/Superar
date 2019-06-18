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
        StyleSheet,
        TouchableOpacity,
        Text, 
        Image, 
        ImageBackground,
        TextInput                             
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const PendingView = () => (
    <View style={{flex: 1,backgroundColor: 'lightgreen',justifyContent: 'center',alignItems: 'center',}}>
      <Text>Waiting</Text>
    </View>
);

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
type Props = {};
export default class EnviarFoto extends Component<Props> {
                
    render() { 
        const text = this.props.text;       
        return (                   
            <ImageBackground source={{uri: 'data:image/jpeg;base64,'+text}} style={styles.container}>
              <View style={{flexDirection: 'column', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <View style={{flexDirection: 'row', flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ddd", padding: 10}}>
                  <TextInput style={styles.input} placeholder="Adicione uma legenda."/>
                  <Icon name="md-send" color="red" size={40}/> 
                </View>
              </View>
            </ImageBackground>
        );          
    }
}   

const styles = StyleSheet.create({
    container: {
      width: width,
      height: height
    },   
    input: {
      flex: 1,
    }, 
    
  });

