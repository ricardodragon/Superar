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
        TouchableOpacity
} from 'react-native';


type Props = {};
const width = Dimensions.get('screen').width;
export default class Post extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            foto: this.props.foto,            
        }
    }
    like(){
        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }
        this.setState({foto: fotoAtualizada})        
    }
    render() { 
        const { foto } = this.state;   
        return (      
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{uri: foto.urlPerfil}} style={styles.fotoPerfil}/>
                    <Text style={{color: 'white'}}>
                        <Text style={styles.nomePerfeil}>{foto.loginUsuario}</Text>                    
                    </Text>
                </View>
                <Image source={{uri: foto.urlFoto}} style={[styles.foto]}/>        
                <View style={styles.rodape}>
                    <TouchableOpacity onPress={this.like.bind(this)}>
                        <Image source={foto.likeada?require('../../resources/s2-checked.png'):require('../../resources/s2.png')} style={styles.botaoLike}/>                     
                    </TouchableOpacity>                    
                    <Text style={styles.texto}>{'2'+' Curtidas'}</Text>      
                    <Text style={{color: 'white'}}><Text style={{color: 'orange', fontWeight: 'bold'}}>{foto.loginUsuario} : </Text>Esse dia foi louco!</Text>              
                    <Text style={{color: 'white'}}>Comentários...</Text>
                </View>
            </View>                      
        );
    }
}

const styles=StyleSheet.create({
    
    container: {
        marginTop: 20
    },
    botaoLike: {
        height: 40,
        width: 40
    },
    rodape: {
        margin: 10
    },
    cabecalho: {
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
    foto: {
        width: width-50, 
        height: width,
        flexDirection: 'column', 
        alignItems: 'center', 
        marginLeft: 28   
    },
    texto: {
        color: 'white'
    },
    nomePerfeil: {
        color: 'white',        
        fontWeight: 'bold'
    },    
})