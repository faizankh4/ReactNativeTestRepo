import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View,StyleSheet,SafeAreaView,Image,FlatList,TouchableOpacity} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
//import styles from '../../styles/index';

  const arrdata = [{key:'About DAFZA',selected:'about_yell.png',normal:'about.png'},{key:'Services',selected:'Services_yell.png',normal:'service.png'},{key:'Starting Business',selected:'start_yellow.png',normal:'start_white.png'},{key:'Client Directory',selected:'clientdirectry_yell.png',normal:'client_dire.png'}];


class DrawerScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  
  // renderItem = ({item,index}) => {
  //   //  if(item.empty === true)
  //   //  {
  //   //    return <View style = {styles.item,styles.itemInvisible}/>  
  //   //  }
    
  //   return(
  //         <View style={styles.item}>
            
  //           <TouchableOpacity onPress = {()=> this.showAlert(item)}
  //                              style = {[styles.item,styles.touchOpacitystyle]}
  //                              >
           
           
  //          <Image
  //         style={{width: 50, height: 50}}
  //         source={require('about.png')}/>
           
  //          <Text style = {styles.itemtext}>{item.key}</Text >
  //           </TouchableOpacity> 
  //          </View>    
  //     );

  //  }
  
  
  renderItem = ({item,index}) => {
  
    return(
          <View style={styles.item}>
            
            <TouchableOpacity onPress = {()=> this.showAlert(item)}
                               style = {[styles.touchOpacitystyle,{backgroundColor:'transpaent',marginVertical:1}]}
                               >
           
           <Image
           style={{width: 40, height: 40,marginLeft:10,backgroundColor:'transparent'}}
         // source={require(`./../images/normal/${item.normal}`)}
         source={require('./../images/normal/service.png')}
         /> 
            <Text style = {[styles.itemtext,{backgroundColor:'red',marginLeft:20}]}>{item.key}</Text >
            </TouchableOpacity> 
           </View>    
      );

   }
  
  
  
  render () {
    return (
      <SafeAreaView style = {{flex:1,backgroundColor:'rgba(15, 48, 72, 1.0)'}}>
      {/* <View style = {{backgroundColor:'green',flex:1}}>
        <ScrollView>
          <View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Screen1')}>
                Home
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Screen2')}>
               About
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Screen3')}>
              Contact
              </Text>
            </View>
          </View>
        </ScrollView>
      </View> */}
    
    <FlatList data = {arrdata}
                 style = {styles.flatList}
                 renderItem = {this.renderItem}
               //  keyExtractor = {item,index}         
       
    >

        </FlatList>   
    
    
      </SafeAreaView>
   
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default (DrawerScreen);


const styles = StyleSheet.create({
    menuItem:{
     flex:1,
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
     
    },  
    container:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
   },
   flatList:{
       flex:1,
       marginVertical:20,
      // marginHorizontal:20,
   },
   item:{
      
       height:50,
       justifyContent:'center',
       alignItems:'center',
     //  margin: 1,
       backgroundColor:'#441F35'
       
   },
   touchOpacitystyle:{
     //backgroundColor:'rgba(1,255,0,1.0)',
     backgroundColor:'transparent',
     flex:1,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'flex-start'

   },
   itemInvisible:{
       backgroundColor:'transparent'
   },
   itemtext:{
       color:'white',
       flex:1,
   }

});