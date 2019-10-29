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
        ImageBackground, 
        StyleSheet,
        FlatList,
        Button,
        StatusBar,
        Text

} from 'react-native';

import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'

import Icon from "react-native-vector-icons/Ionicons";
import Post from './Post'
  
  import { TabNavigator, Navigation} from "react-native-navigation"; // TABNAVIGATOR ADDED --- FAILED

//Splash/////////////////////////////////////////////////////////

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


////////////////////////////////////////////////////////////////////



type Props = {};
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

//LEO Fez essa merda aqui
//Tela teste para o menu
// class FeedScreen extends React.Component{
//   render(){
//     return(
//       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
// <Text>Feed</Text>
//       </View>
//     );
//   }
// }
// class SettingsScreen extends React.Component{
//   render(){
//     return(
//       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
// <Text>Settings</Text>
//       </View>
//     );
//   }
// }


export default class Feed extends Component<Props> {

  
  tabs = [
    {
      key: 'Feed',
      icon: 'md-paper',
      label: 'Feed',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Perfil',
      icon: 'md-person',
      label: 'Perfil',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Nova Foto',
      icon: 'md-add',
      label: 'Nova Foto',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]
  

  
  constructor(){
    super();
    this.state = {        
        fotos: [],
        teste: false
    }

  } 

  //Leo fez essa merda aqui
  //Navegação das tabs do menu
//   TabNavigator({
//     Feed: { screen: FeedScreen },
//   Settings: { screen: SettingsScreen },
//  });


  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )
  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )
  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
        .then(resposta => 
            resposta.json()
            
        )
        .then(json =>{            
            this.setState({fotos: json})   
        })
      
  }

  goFoto(){
     
    Navigation.push(this.props.componentId, {
        component: {
            name: 'foto',            
            options: {
                topBar: {
                    height: 0                
                }
            }
        }
    }); 
  }
  
  render() { 
        
    return (
      <View style={styles.container}>        
          <View style={{flex: 1}}>
            <FlatList style={styles.posts} data = {this.state.fotos} keyExtractor={item=>item.id+''} renderItem= {({item})=>          
                <Post foto={item}/>                                             
            }/>    
               
          
            <BottomNavigation 
              onTabPress={(newTab) => {
                this.setState({ activeTab: newTab.key })            
                newTab.key=='Nova Foto'?this.goFoto():''
                }
              }
              renderTab={this.renderTab}
              tabs={this.tabs}
            /> 
          </View>               
      </View>
                                   
    );
  }
}

const styles = StyleSheet.create({
  
  container:{ 
    
    height: height,
    width: width,
    flex:1
  },
  posts:{
    height: height,
    width: width,
    flex:1
  }
});

// const styles=StyleSheet.create({
  
//   container:{ 
    
//     height: height,
//     width: width,
//     flex:1
//   },
//   posts:{
//     height: height,
//     width: width,
//     flex:1
//   }

// })
