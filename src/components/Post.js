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
} from 'react-native';
import CabecalhoPost from '../components/CabecalhoPost'
import PostContainer from './PostContainer';
import RodapePost from '../components/RodapePost'


type Props = {};
const width = Dimensions.get('screen').width;
export default class Post extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            foto: this.props.foto,            
            comentarios: [{texto: 'Esse dia foi louco memo mlk!',id:0}]
        }
    }
    like(){
        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }
        this.setState({foto: fotoAtualizada})        
    }

    adicionaComentario(valorComentario, inputComentario){
        //console.warn(this.state.valorComentario);    
        if(valorComentario === '') return;
        const novaLista = this.state.comentarios;
        this.setState({comentarios: novaLista.concat([{texto: valorComentario, id:1}])});
        inputComentario.clear();
    }

    render() { 
        const { foto, comentarios } = this.state;
        return (      
            <View style={styles.container}>
                <CabecalhoPost foto={foto}/>
                <PostContainer foto={foto} like={this.like.bind(this)}/>
                <RodapePost comentarioCallBack={this.adicionaComentario.bind(this)} foto={foto} comentarios={comentarios} like={this.like.bind(this)}/>
            </View>                      
        );
    }
}

const styles=StyleSheet.create({
    
    container: {
        //marginTop: 20
        marginBottom: 13
    },
    
              
})