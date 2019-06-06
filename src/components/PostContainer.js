



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
        Image, 
        TouchableOpacity,
        Dimensions              
} from 'react-native';


type Props = {};
const width = Dimensions.get('screen').width;
export default class PostContainer extends Component<Props> {


    render(){
        const { foto } = this.props;   
        return(
            <TouchableOpacity onLongPress={this.props.like}>
                <Image source={{uri: foto.urlFoto}} style={[styles.foto]}/>        
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    foto: {
        width: width, 
        height: width,
        flexDirection: 'column', 
        alignItems: 'center', 
        
    },
})

