import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View,StyleSheet,SafeAreaView,Image,FlatList,TouchableOpacity,ImageBackground,Alert} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
//import styles from '../../styles/index';

  // const arrdata = [{key:'About DAFZA',selected:'about_yell.png',normal:require('./../images/normal/about.png')},{key:'Services',selected:'Services_yell.png',normal:require('./../images/normal/service.png')},{key:'Starting Business',selected:'start_yellow.png',normal:require('./../images/normal/start_white.png')},{key:'Client Directory',selected:'clientdirectry_yell.png',normal:require('./../images/normal/client_dire.png')},{key:'Social Activities',selected:'social_act_yellow.png',normal:require('./../images/normal/social_act_white.png')},{key:'Public Services',selected:'events_hover.png',normal:require('./../images/normal/event_white.png')},{key:'Media Gallery',selected:'media_yell.png',normal:require('./../images/normal/media.png')},{key:'Login',selected:'log_In_yell.png',normal:require('./../images/normal/login.png')},{key:'Reach us',selected:'locateus_yell.png',normal:require('./../images/normal/locate.png')},{key:'Dafza eye',selected:'Dafza_cam.png',normal:require('./../images/normal/Dafza_cam.png')}];


 

  export class DrawerScreen extends React.Component {
  
   constructor(props)
   {
     super(props)
     this.state = {
      arr :[{key:'About DAFZA',selected:require('./../images/hover/about_yell.png'),normal:require('./../images/normal/about.png'),selectedItem:false},
      {key:'Services',selected:require('./../images/hover/Services_yell.png'),normal:require('./../images/normal/service.png'),selectedItem:false},
      {key:'Starting Business',selected:require('./../images/hover/start_yellow.png'),normal:require('./../images/normal/start_white.png'),selectedItem:false},
      {key:'Client Directory',selected:require('./../images/hover/clientdirectry_yell.png'),normal:require('./../images/normal/client_dire.png'),selectedItem:false},
      {key:'Social Activities',selected:require('./../images/hover/social_act_yellow.png'),normal:require('./../images/normal/social_act_white.png'),selectedItem:false},
      {key:'Public Services',selected:require('./../images/hover/events_hover.png'),normal:require('./../images/normal/event_white.png'),selectedItem:false},
      {key:'Media Gallery',selected:require('./../images/hover/media_yell.png'),normal:require('./../images/normal/media.png'),selectedItem:false},
      {key:'Login',selected:require('./../images/hover/log_In_yell.png'),normal:require('./../images/normal/login.png'),selectedItem:false},
      {key:'Reach us',selected:require('./../images/hover/locateus_yell.png'),normal:require('./../images/normal/locate.png'),selectedItem:false},
      {key:'Dafza eye',selected:require('./../images/normal/Dafza_cam.png'),normal:require('./../images/normal/Dafza_cam.png'),selectedItem:false}],
      selectedIndex:-1,
     
     };
    
     
   
  
   }
  
  
  
    navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  
  // getLocalImages = (item) =>
  // {

  //    require('./../images/normal/')  
  // }
  
  
  goToNextScreen(item,index) 
  {
    
     this.setState({selectedIndex:index});
    
    if(item.key === 'About DAFZA')
     {
      this.props.navigation.navigate({routeName:'AboutUsScreen'});
   //   Alert.alert('screen1')
    
    }
    else if(item.key === 'Services')
    {
      this.props.navigation.navigate({routeName:'ServicesScreen'});
     // Alert.alert('screen2')
    }
    
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  
  }
  
 
 
 
  renderItem = ({item,index}) => {
  
    // const localImages = `./../images/normal/${item.normal}`
     console.log(item.normal)
     const localImages = './../images/normal/'+item.normal
     console.log(localImages)

    
   
     if(this.state.selectedIndex === index)
     {
      return(
        <View style={styles.item}>
          
          <TouchableOpacity onPress = {() => this.goToNextScreen(item)}
                             style = {[styles.touchOpacitystyle,{backgroundColor:'transparent',marginVertical:1}]}
                             >
         
         <Image
         style={{width: 15, height: 15,marginLeft:10,backgroundColor:'transparent',resizeMode:'contain'}}
        source={item.selected}
       // source={require('./../images/normal/event_white.png')}
      
    
        //  source={require({localImages})}
       /> 
          <Text style = {[styles.itemtext,{backgroundColor:'transparent',marginLeft:20,color:'yellow'}]}>{item.key}</Text >
          </TouchableOpacity> 
         </View>    
    );
     
    
     }
      else{
     return(
          <View style={styles.item}>
            
            <TouchableOpacity onPress = {() => this.goToNextScreen(item,index)}
                               style = {[styles.touchOpacitystyle,{backgroundColor:'transparent',marginVertical:1}]}
                               >
           
           <Image
           style={{width: 15, height: 15,marginLeft:10,backgroundColor:'transparent',resizeMode:'contain'}}
          source={item.normal}
         // source={require('./../images/normal/event_white.png')}
        
      
          //  source={require({localImages})}
         /> 
            <Text style = {[styles.itemtext,{backgroundColor:'transparent',marginLeft:20}]}>{item.key}</Text >
            </TouchableOpacity> 
           </View>    
      );
       }
   
    }
  
   goToNext()
  {
   
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
    this.props.navigation.navigate({routeName:'Screen1'});
  // navigation.navigate('Screen1')
   Alert.alert('calll')
  }
  
  render () {
    const {navigation} = this.props;
   
   
    return (
    //  <SafeAreaView style = {{flex:1,backgroundColor:'rgba(15, 48, 72, 1.0)'}}>
     
     <View style = {{flex:1,backgroundColor:'rgba(15, 48, 72, 1.0)'}}>
     {/* <SafeAreaView style = {{flex:1,backgroundColor:'rgba(15, 48, 72, 1.0)'}}> */}
      {/* <View style = {{backgroundColor:'green',flex:1,paddingTop:20}}>
        <ScrollView>
          <View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Screen1')}>
                Home
              </Text>
            <TouchableOpacity onPress = {() =>this.goToNext()}
                               style = {[styles.touchOpacitystyle,{backgroundColor:'transparent',marginVertical:1}]}
                               >
                 <Text>Home</Text>
            </TouchableOpacity>
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
    
 
    
    
     <ImageBackground style = {{flex:1,}}
            source = {require('./../images/01_Left_Pull_Out.png')}
      >
      <FlatList data = {this.state.arr}
                 style = {[styles.flatList,{marginTop:160}]}
                 renderItem = {this.renderItem}
                 keyExtractor = {(item) => item.key}
                 extraData={this.state}
                 //  keyExtractor = {item,index}         
       
    >

        </FlatList>    
    
    
     </ImageBackground>  
   
    {/* </SafeAreaView> */}
      </View>
      // </SafeAreaView>
   
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
      
       height:30,
       justifyContent:'center',
       alignItems:'center',
     //  margin: 1,
     //  backgroundColor:'#441F35'
       
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
       fontSize:12,
   }

});