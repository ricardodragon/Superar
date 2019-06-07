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
} from 'react-native';
import { RNCamera } from 'react-native-camera';

const PendingView = () => (
    <View style={{flex: 1,backgroundColor: 'lightgreen',justifyContent: 'center',alignItems: 'center',}}>
      <Text>Waiting</Text>
    </View>
);

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
type Props = {};
export default class Foto extends Component<Props> {
    constructor(){
        super(); 
        this.state = {
          showCam: true,
          foto: ''
        }       
    }
    async takePicture(){
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const foto = await this.camera.takePictureAsync(options)
          this.setState({foto: foto.base64, showCam: false});
          
        }
    }    
    showCam() {
      if (this.state.showCam) {
        return (
          <View style={styles.container}>
            <RNCamera 
              ref={ref => {
                this.camera = ref;
              }} style = {styles.preview} type={RNCamera.Constants.Type.back} flashMode={RNCamera.Constants.FlashMode.off}
              //   androidCameraPermissionOptions = {{
              //     title :  ' Permissão para usar a câmera ' ,
              //     message :  " Precisamos da sua permissão para usar sua câmera " ,
              //     buttonPositive :  ' Ok ' ,
              //     buttonNegative :  ' Cancelar ' ,
              //   }}
              //   androidRecordAudioPermissionOptions = {{
              //     title :  ' Permissão para usar gravação de áudio ' ,
              //     message :  " Precisamos da sua permissão para usar o seu áudio " ,
              //     buttonPositive :  ' Ok ' ,
              //     buttonNegative :  ' Cancelar ' ,
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}/>
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity onPress={this.takePicture.bind(this)} style = {styles.capture}>
                  <Text style={{fontSize: 14}}> </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      } else {
          return <View style={styles.containerMax}>
              <Image style={{width: width, height: height}} source={{uri: 'data:image/png;base64,'+this.state.foto}}/>
            </View>;
      }
    }
    render() {        
      return (                   
        this.showCam()        
      );          
    }
}   

const styles = StyleSheet.create({
    containerMax: {
      width: width,
      height: height
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    }
  });

