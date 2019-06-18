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
        Text                             
} from 'react-native';
import { RNCamera }  from 'react-native-camera';
import Icon from "react-native-vector-icons/Ionicons";
import { Navigation } from "react-native-navigation";
const PendingView = () => (
    <View style={{flex: 1,backgroundColor: 'lightgreen',justifyContent: 'center',alignItems: 'center',}}>
      <Text>Waiting</Text>
    </View>
);

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
type Props = {};
export default class Foto extends Component<Props> {

    getOrientation = () => {
      if( this.refs.rootView ){
        if( Dimensions.get('window').width < Dimensions.get('window').height )
          this.setState({ orientation: 'portrait' });
        else
          this.setState({ orientation: 'landscape' });
      }
    }

    componentDidMount(){
      this.getOrientation();      
      Dimensions.addEventListener( 'change', () =>{
        this.getOrientation();
      });
    }

    constructor(){
      super(); 
      this.state = {
        showCam: true,
        foto: '',
        virar: false,
        flash: false,
        orientation: ''
      }       
    }
    async takePicture(){
      if (this.camera) {
        const options = { quality: 0.5, base64: true, mirrorImage: true, pauseAfterCapture:  true, fixOrientation: true};
        const foto = await this.camera.takePictureAsync(options)         
        //RNCamera.resumePreview();        
        Navigation.push(this.props.componentId, {
            component: {
              name: 'enviarfoto',
              passProps: {                  
                text: foto.base64
              },
              options: {
                topBar: {
                  height: 0,                                
                },   
              }
            }
        });          
      }
    }        
    render() {        
      return (                   
        <View style={styles.container}>
            <RNCamera 
              ref={ref => {
                this.camera = ref;
              }} style = {styles.cam} 
              type={this.state.virar?RNCamera.Constants.Type.back:RNCamera.Constants.Type.front} 
              flashMode={this.state.flash?RNCamera.Constants.FlashMode.on:RNCamera.Constants.FlashMode.off}              
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}/>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
                <TouchableOpacity onPress={()=>this.setState({virar: !this.state.virar})}>
                  <Icon name="md-reverse-camera" color="white" size={40} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.takePicture.bind(this)} style = {styles.capture}>
                    <Text style={{fontSize: 12}}> </Text>
                </TouchableOpacity>  
                <TouchableOpacity onPress={()=>this.setState({flash: !this.state.flash})}>
                  <Icon name={this.state.flash?"md-flash":"md-flash-off"} color="white" size={40} />
                </TouchableOpacity>                      
              </View>
            </View>
          </View>
      );          
    }
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  cam: {
    width: width,
    height: height,
    position: 'absolute'
  },    
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',    
  }
  
});

