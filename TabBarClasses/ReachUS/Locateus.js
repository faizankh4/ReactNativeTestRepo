import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text ,Dimensions,ImageBackground,TouchableOpacity,Alert,Image,Linking} from 'react-native';
// import all basic components
import SegmentedControlTab from "react-native-segmented-control-tab";
//import {Linking} from 'react-native'
import renderif from './../renderif'
//import MapView from 'react-native-maps';
const Byroadtext = 'From Shaikh Zayed Road:\nOn Shaikh Zayed road, drive towards Sharjah. After crossing the Garhoud bridge, join Shaikh Rashid Road. Continue on to Dubai-Sharjah road and take exit to join Al Quds Street. DAFZA will be on your left at the third traffic signal.\n\nFrom Dubai International Airport :\nDrive on D89 with Airport on your right. Take slight right to join Shaikh Rashid Road. Continue on to Dubai-Sharjah road and take exit to join Al Quds Street. DAFZA will be on your left at the third traffic signal.'
const ByMetroText = 'By Metro :\n\nTake the Green Line and alight at the DAFZA station. DAFZA operates a feeder bus service from DAFZA station to DAFZA '
const phoneNo = '+971 4 299 5555'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class LocateUS extends Component {
  //Screen2 Component
  constructor (props)
  {
    super(props)  
    this.state = {
     selectedIndex :0,
     routeText:Byroadtext,
     showMapView:false,
  
    };
  }
  
  handleIndexChange = (index) => {
  
  if (index == 0)
  {
    this.setState({
      ...this.state,
      selectedIndex: index,
      routeText:Byroadtext,
    
    });
  // Alert.alert('call')
}
else{

    this.setState({
        ...this.state,
        selectedIndex: index,
        routeText:ByMetroText,
      
      });

}  



};
 
 openMapView = () =>
 {
// Alert.alert('mapview display call');

  this.setState({showMapView:true})
}
 

makeCall()
{
  Linking.openURL(`tel:${phoneNo}`) 
}

 render() {
    return (
      <View style={styles.MainContainer}>
      <View style = {{flex:0.5,backgroundColor:''}}>
       <View style = {{flex:0.4,backgroundColor:'red'}}>
       <ImageBackground style = {{flex:1,alignItems:'stretch',justifyContent:'flex-start'}}
            source = {require('./../../images/Locateus/map.png')}
      >
   
     <TouchableOpacity style = {{flex:1,alignItems:'flex-start',justifyContent:'flex-end'}}
                        onPress = {() => this.openMapView()}
     >
     
     <Text style = {{margin:5,fontWeight:'bold',color:'rgba(176, 48, 96, 1.0)'}}>
     view map
     </Text> 
     
     </TouchableOpacity>
       
     </ImageBackground>
      
       </View>
       <View style = {{flex:0.6,backgroundColor:'transparent',flexDirection:'row'}}>
       <View style = {{flex: 1,backgroundColor:'transparent'}}>
       <Text style = {{marginHorizontal:8,fontSize:12,fontWeight:'bold',color:'white',marginTop:12,marginBottom:16,}}>
       Contact Information
       </Text>
       <Text style = {{marginHorizontal:8,fontSize:12,fontWeight:'500',color:'white',marginVertical:2}}>
       Dubai Airport Freezone
       </Text>
       <Text style = {{marginHorizontal:8,fontSize:12,fontWeight:'500',color:'white',marginVertical:2}}>
       PO Box 491 Dubai, UAE
       </Text>  
       <TouchableOpacity style = {{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginVertical:2}}
                         onPress = {() => this.makeCall()}
       >
        <Text style = {{marginHorizontal:8,fontSize:12,fontWeight:'500',color:'white',}}>
        Tel: 
       </Text>  
       <Text style = {{fontSize:12,fontWeight:'500',color:'yellow'}}>
        {phoneNo}
       </Text >
       </TouchableOpacity>
       <Text style = {{marginHorizontal:8,fontSize:12,fontWeight:'500',color:'white',marginVertical:2}}>
       Fax : +971 4 299 5500
       </Text>
       </View>    
       <View style = {{width:140,backgroundColor:'transparent',alignItems:'center',justifyContent:'space-evenly'}}>
       <ImageBackground style = {{width:70,height:70,alignItems:'center',justifyContent:'center'}}
            source = {require('./../../images/Locateus/location_circle.png')}
      >
   
      <Image style = {{width:40,height:40,resizeMode:'contain'}}
             source = {require('./../../images/Locateus/location_arrow.png')} 
      >
      
      </Image> 
     </ImageBackground>
       <Text style = {{color:'white',fontSize:10,}}>
       13745678
       </Text>
       <TouchableOpacity style = {{flexDirection:'row',backgroundColor:'transparent',alignItems:'center',justifyContent:'space-evenly',width:'100%',}}>
       <Image style = {{width:20,height:20,resizeMode:'contain'}}
             source = {require('./../../images/Locateus/location_get_directions.png')} 
      >
      
      </Image> 
     
      <Text style = {{color:'white',fontSize:12}}>
      Get Direction
      </Text>  
       </TouchableOpacity>  
       </View>    
       
       </View>
      </View>
      <View style = {{height:2,width:'100%',backgroundColor:'darkgray'}}>
      
      </View>    
      <View style = {{flex:0.5,backgroundColor:''}}>
      <Text style = {{margin:8,color:'white',fontSize:10,textAlign:'justify',fontStyle:'normal',fontWeight:'500',flex:1,backgroundColor:'transparent'}}>
       {this.state.routeText}
       </Text>    
       <SegmentedControlTab
          values={["By Road", "By Metro"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange.bind(this)}
          tabsContainerStyle = {styles.tabsContainer}
          tabStyle = {styles.tabStyle}
          firstTabStyle = {styles.firstTabStyle}
          activeTabStyle = {styles.activeTabStyle}
          activeTabTextStyle = {styles.activeTabTextStyle}
          tabTextStyle = {styles.tabTextStyle}
         
        />
     
      </View>
      {renderif(this.state.showMapView)(
      <View style = {{width:'96%',
         height:(screenHeight - 82),
        margin:8,
        position:'absolute',
        backgroundColor:'rgba(15, 48, 72, 1.0)',
        borderColor:'white',
        borderWidth:2,
        borderRadius:10,
        }
        }
       
       >
     
     
      </View>
      )}
     
     {/* <MapView
         style = {{height: 400,
          marginTop: 80,}}
         showsUserLocation = {false}
         followUserLocation = {false}
         zoomEnabled = {true}
      /> */}
    
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
   // paddingTop: 20,
    alignItems: 'stretch',
  //  marginTop: 50,
    justifyContent: 'flex-start',
    backgroundColor:'rgba(15, 48, 72, 1.0)',
  },tabsContainer: {
    width:'96%',
    height:30,
    margin:8,
 },
 tabStyle: {
   //custom styles
  
   borderColor:'white' ,
   backgroundColor:'transparent',
 },
 firstTabStyle: {
   //custom styles
  
 //  tintColor:


},
 lastTabStyle: {
   //custom styles
 
 },
 tabTextStyle: {
   //custom styles
 //  color:'rgba(15, 48, 72, 1.0)',
   color:'white',
 },
 activeTabStyle: {
   //custom styles
   backgroundColor:'rgba(15, 48, 72, 1.0)',

 },
 activeTabTextStyle: {
   //custom styles
 color:'yellow',
 },
 tabBadgeContainerStyle: {
   //custom styles
 },
 activeTabBadgeContainerStyle: {
   //custom styles
 },
 tabBadgeStyle: {
   //custom styles
 },
 activeTabBadgeStyle: {
   //custom styles
 },


});