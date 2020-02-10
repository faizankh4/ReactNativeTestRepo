import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text ,Dimensions,ImageBackground,TouchableOpacity,Alert,Image,Linking} from 'react-native';
// import all basic components
import SegmentedControlTab from "react-native-segmented-control-tab";
//import {Linking} from 'react-native'
import renderif from './../renderif'
//import MapView from 'react-native-maps';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Polyline from '@mapbox/polyline';
const Byroadtext = 'From Shaikh Zayed Road:\nOn Shaikh Zayed road, drive towards Sharjah. After crossing the Garhoud bridge, join Shaikh Rashid Road. Continue on to Dubai-Sharjah road and take exit to join Al Quds Street. DAFZA will be on your left at the third traffic signal.\n\nFrom Dubai International Airport :\nDrive on D89 with Airport on your right. Take slight right to join Shaikh Rashid Road. Continue on to Dubai-Sharjah road and take exit to join Al Quds Street. DAFZA will be on your left at the third traffic signal.'
const ByMetroText = 'By Metro :\n\nTake the Green Line and alight at the DAFZA station. DAFZA operates a feeder bus service from DAFZA station to DAFZA '
const phoneNo = '+971 4 299 5555'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const GOOGLE_MAPS_APIKEY = 'AIzaSyCKj-o_mCzxqPl3WPjkZQMEUt7sXoweWGM';
const LATITUDE = 28.5355;
const LONGITUDE = 77.3910;
const LATITUDE_DELTA = 25.25920633;
const LONGITUDE_DELTA = 55.37231809;

export default class LocateUS extends Component {
  //Screen2 Component
  constructor (props)
  {
    super(props)  
    this.state = {
     selectedIndex :0,
     routeText:Byroadtext,
     showMapView:false,
     coordinates: [
      {
        latitude: 28.5355,
        longitude: 77.3910,
      },
      {
        latitude: 25.25920633,
        longitude: 55.372717,
      },
    ],
    coords: [],
  
    };
    this.mapView = null;
  
  }
  
  async getDirections(startLoc, destinationLoc) {
    try {
        let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&Key=${GOOGLE_MAPS_APIKEY}`)
        let respJson = await resp.json();
        let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
        let coords = points.map((point, index) => {
            return  {
                latitude : point[0],
                longitude : point[1]
            }
        })
        this.setState({coords: coords})
        return coords
    } catch(error) {
        return error
    }
}
 
componentDidMount()
{

  this.getDirections('28.5355, 77.3910','25.25920633, 55.372717');
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
 
removeWebView = ()=>
{
  this.setState({showMapView:false})
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
      <MapView
        //  style = {{flex:1 }}
        //  showsUserLocation = {true}
        //  followUserLocation = {false}
        //  zoomEnabled = {true}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={{flex:1,}}
        ref={c => this.mapView = c}
       // onPress={this.onMapPress}
         
         >
         
          {/* <MapViewDirections
          origin={this.state.coordinates[0]}
           destination={this.state.coordinates[1]}
           apikey={GOOGLE_MAPS_APIKEY}
           strokeWidth={3}
           strokeColor="hotpink"
           >
          </MapViewDirections> */}
           <MapView.Polyline 
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>
         
         </MapView>
      
     
     <TouchableOpacity style = {{width:40,height:40,position:'absolute'}}
                          onPress = {this.removeWebView.bind(this)} 
        >
         <Image style = {{width:25,height:25,resizeMode:'contain',margin:8}}
                source = {require('./../../images/Locateus/fancy_closebox.png')}

         
         > 

          </Image> 
        
         </TouchableOpacity>
     
     
      </View>
      )}
     
     
    
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