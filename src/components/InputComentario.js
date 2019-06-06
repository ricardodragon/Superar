

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
        TouchableOpacity,
        TextInput        
} from 'react-native';


type Props = {};
export default class InputComentario extends Component<Props> {

    constructor(){
        super();
        this.state = {
            valorComentario: ''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Adicione um comentário."   
                    ref={input => this.inputComentario = input} onChangeText={texto => this.setState({valorComentario: texto})}/>
                    
                <TouchableOpacity onPress={()=>{
                    this.props.comentarioPost(this.state.valorComentario, this.inputComentario);
                    this.setState({valorComentario: ''})}}>
                    <Image source={require('../../resources/send.png')} style={styles.send}/>        
                </TouchableOpacity>
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    input: {
        flex: 1,
    },
    send: {
        height: 30,
        width: 30
    },
})