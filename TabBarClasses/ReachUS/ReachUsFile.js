import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text ,Button,Platform,Image,Alert,FlatList,Dimensions,ActivityIndicator,TouchableOpacity,WebView,DeviceInfo} from 'react-native';
import { Header } from 'react-navigation-stack';
//import DeviceInfo from 'react-native-device-info';
//import { getUniqueId, getManufacturer } from 'react-native-device-info';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenheight = Math.round(Dimensions.get('window').height);
const arrImages = [{imagekey:require('./../../images/BottamBarimages/Reachus/locate_US.png'),labelTetx:'Locate us'},
{imagekey:require('./../../images/BottamBarimages/Reachus/enquiry.png'),labelTetx:'Enquiry'},
{imagekey:require('./../../images/BottamBarimages/Reachus/feedback.png'),labelTetx:'Feedback/Complaints'},
{imagekey:require('./../../images/BottamBarimages/Reachus/emergency.png'),labelTetx:'Contact Us'},
{imagekey:require('./../../images/BottamBarimages/Reachus/faq.png'),labelTetx:'FAQ'},
{imagekey:require('./../../images/BottamBarimages/Reachus/operating_hours.png'),labelTetx:'Operating Hours'},
{imagekey:require('./../../images/BottamBarimages/Reachus/reachus_fb_white.png'),labelTetx:'Facebook'},
{imagekey:require('./../../images/BottamBarimages/Reachus/youtube_W.png'),labelTetx:'Youtube'},
{imagekey:require('./../../images/BottamBarimages/Reachus/reachus_instagram_white.png'),labelTetx:'instagram'}

];

const noCoulmns = 3;
export const LANDSCAPE = 'landscape';
export const PORTRAIT = 'portrait';

export const getHeaderHeight = () => {
    let height;
    const orientation = getOrientation();
    height = getHeaderSafeAreaHeight();
    height += DeviceInfo.isIPhoneX_deprecated && orientation === PORTRAIT ? 24 : 0;
  
    return height;
  };
  
  // This does not include the new bar area in the iPhone X, so I use this when I need a custom headerTitle component
  export const getHeaderSafeAreaHeight = () => {
    const orientation = getOrientation();
    if (Platform.OS === 'ios' && orientation === LANDSCAPE && !Platform.isPad) {
      return 32;
    }
    return Header.HEIGHT;
  };
  
  export const getOrientation = () => {
    const { width, height } = Dimensions.get('window');
    return width > height ? LANDSCAPE : PORTRAIT;
  };



export default class ReachUsFile extends Component {

  
    
   
    showAlert = (item,index) =>
    {
     //  Alert.alert(`value is ${item.labelTetx}`);
   
     if (index === 0)
     { 
     this.props.navigation.navigate('LocateUSScreen');
     }
     else{
      this.props.navigation.navigate('EnquiryScreen'); 
     }
    }
    
    
    renderItem = ({item,index}) => {
        //  if(item.empty === true)
        //  {
        //    return <View style = {styles.item,styles.itemInvisible}/>  
        //  }
        
        return(
              <View style={styles.item}>
                
                <TouchableOpacity onPress = {()=> this.showAlert(item,index)}
                                   style = {[styles.item,styles.touchOpacitystyle]}
                                   >
               
                <Image style = {{resizeMode:'center',width:50,height:50}}
                       source = {item.imagekey}
                 >
                
                </Image>    
               
               
                <Text style = {[styles.itemtext,{marginTop:8}]}
                      numberOfLines = {2}
                >{item.labelTetx}</Text >
                </TouchableOpacity> 
               </View>    
          );
    s
       }
  
  
  
    render(){

    
        return (
           //  <View style = {styles.container}>
              <FlatList data = {arrImages}
                        style = {styles.flatList}
                        renderItem = {this.renderItem}
                         numColumns = {noCoulmns}
                         keyExtractor = {(item) => item.imagekey}
              >
       
               </FlatList>   
             
            // </View>   
           );
            
          

 }

}

const styles = StyleSheet.create(
  
    {
        
        container:{
           flex:1,
           flexDirection:'column',
           justifyContent:'center',
           alignItems:'center',
        },
        flatList:{
            flex:1,
            backgroundColor:'rgba(15, 48, 72, 1.0)'
            // marginVertical:20,
           // marginHorizontal:20,
        },
        item:{
           
            height:((screenheight-getHeaderHeight()-(49+noCoulmns)))/noCoulmns,
            width:(Math.round(Dimensions.get('window').width)-noCoulmns*2)/noCoulmns,
            justifyContent:'center',
            alignItems:'center',
            margin: 1,
           // backgroundColor:'#441F35',
            backgroundColor:'transparent'
            
        },
        touchOpacitystyle:{
          //backgroundColor:'rgba(1,255,0,1.0)',
          backgroundColor:'transparent',
          padding:0,
        },
        itemInvisible:{
            backgroundColor:'transparent'
        },
        itemtext:{
            color:'white',
            textAlign:'center',
        }
    }
);