




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
        Dimensions,
        View,
        Text,
        AsyncStorage              
} from 'react-native';
import InputComentario from '../components/InputComentario'

type Props = {};
const width = Dimensions.get('screen').width;
export default class RodapePost extends Component<Props> {

    constructor(){
        super();
        this.state={
            usuario: ''
        }
    }

    comentarioPost(valorComentario, inputComentario){        
        this.props.comentarioCallBack(valorComentario, inputComentario)
    }
    componentWillMount(){
        AsyncStorage.getItem('usuario').then(usuario=> {
            this.setState({usuario: usuario})
        })
    }
    render(){          
        const { comentarios, foto } = this.props;         
        return(            
            <View style={styles.rodape}>
                <TouchableOpacity onPress={this.props.like}>
                    <Image source={this.props.foto.likeada?require('../../resources/s2-checked.png'):require('../../resources/s2.png')} style={styles.botaoLike}/>                     
                </TouchableOpacity>
                <Text style={styles.curtidas}>1 curtida</Text>                   
                <Text>
                    <Text style={{color: 'orange', fontWeight: 'bold'}}>{foto.loginUsuario} : </Text>Esse dia foi louco!
                </Text>              
                {comentarios.map(comentario=>
                    <View style={styles.comentario} key={comentario.id}>  
                        <Text style={{fontWeight: 'bold'}}>{this.state.usuario}</Text>
                        <Text> {comentario.texto}</Text>
                    </View>
                )}
                <InputComentario comentarioPost={this.comentarioPost.bind(this)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    botaoLike: {
        height: 40,
        width: 40
    },
    rodape: {
        margin: 10
    },       
    comentario: {
        flexDirection: 'row'
    },
    curtidas: {
        fontWeight: 'bold'
    }
})

