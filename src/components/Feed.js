/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        View,
        Dimensions,
        FlatList,
        ImageBackground 
} from 'react-native';
//import { RNCamera } from 'react-native-camera';
import Post from './Post'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export default class Feed extends Component<Props> {
  constructor(){
    super();
    this.state = {
        fotos: [],
        teste: ''
    }
  } 

  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => 
        resposta.json()
        //console.log(JSON.stringify(resposta));
      )
      .then(json => this.setState({fotos: json, teste: json}))
      
  }

  render() { 
    return (
      <View style={styles.container}>        
          <ImageBackground source={require('../../resources/superar.jpg')} style={styles.header}>
          </ImageBackground>
          <FlatList style={styles.container} data = {this.state.fotos} keyExtractor={item=>item.id+''} renderItem= {({item})=>
            <Post foto={item}/>                                
          }/>                                  
      </View>
    );
  }
}

const styles=StyleSheet.create({
  header: {width: width, height: 5*height/100},
  container: {
    height: height,
    width: width, 
    marginBottom: 50,   
  },  
  footer: {
    //position: 'absolute',
    backgroundColor: 'orange',
    height: 0.05*height,    
    bottom: 0
  }
})
