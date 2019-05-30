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
        Text, 
        View,
        Dimensions,
        Image,
        ScrollView,
        FlatList,
        ImageBackground 
} from 'react-native';
//import { RNCamera } from 'react-native-camera';
import Post from './src/components/Post'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export default class App extends Component<Props> {
  constructor(){
    super();
    this.state = {
        fotos: []
    }
  } 

  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => resposta.json())
      .then(json => this.setState({fotos: json}))
  }

  render() { 
    return (
      <View>
        <ImageBackground source={require('./resources/superar.jpg')} style={{width: '100%', height: '100%'}}>
          <FlatList style={styles.container} data = {this.state.fotos} keyExtractor={item=>item.id+''} renderItem= {({item})=>
            <Post  foto={item}/>                    
          }/> 
          <View style={styles.footer}>          
          </View>                 
        </ImageBackground>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    marginTop: 150
  },  
  footer: {
    //position: 'absolute',
    backgroundColor: 'orange',
    height: 0.05*height,    
    bottom: 0
  }
})