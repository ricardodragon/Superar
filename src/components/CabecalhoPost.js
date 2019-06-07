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
        Image, 
        Text              
} from 'react-native';


type Props = {};
export default class CabecalhoPost extends Component<Props> {

// Navigation.push(this.props.componentId, {
//     component: {
//       name: 'feed',
//       passProps: {
//         text: 'feed'
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'feed'
//           }
//         }
//       }
//     }
// });

    render(){
        const { foto } = this.props;   
        return(
            <View style={styles.container}>
                <Image source={{uri: foto.urlPerfil}} style={styles.fotoPerfil}/>
                <Text>
                    <Text style={styles.nomePerfeil}>{foto.loginUsuario}</Text>                    
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10, 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    fotoPerfil:{
        borderRadius: 20, 
        width: 40, 
        height: 40,
        marginRight: 10
    },
    nomePerfeil: {                
        fontWeight: 'bold'
    }, 
})

