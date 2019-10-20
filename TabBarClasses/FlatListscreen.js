import React from 'react';
import {Text,StyleSheet,View,SafeAreaView,FlatList,Alert,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

 export class FlatListScreen extends React.Component
 {
    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            > 
            </View> 
        );  
    };  
 getlistItem = (item) => {

    Alert.alert(item.key);
 };
 
render(){
   return(
    <View style = {styles.container}>
    
    <FlatList  data = {[{key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
    {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
    {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
    {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
    {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
    {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
    {key: 'Rails'},{key: '.Net'},{key: 'Perl'}]}
    // renderItem = {({item}) => <Text style = {styles.item}
    //                               onPress = {() => this.getlistItem(item)}>{item.key}</Text>
                                  
                                 
                                  
    //                               }
        
    //  renderItem = {({item}) => <TouchableOpacity style = {styles.item}
    //                                             onPress = {() => this.getlistItem(item)}>
    //                                              <Text style = {{color:'green'}}>{item.key}</Text>   
    //                                             </TouchableOpacity>}
                               
                                   
     renderItem = {({item}) => <View style={{flexDirection:'row',backgroundColor:'green',marginBottom:2,height:44}}>
     <View style = {{width:42,height:42,backgroundColor:'red'}}>
     <Image
          style={{width: 42, height: 42}}
          source={{uri: 'https://randomuser.me/api/portraits/thumb/men/20.jpg'}}
        />
     </View>    
     <View style={{flex:1.0,backgroundColor:'black',paddingLeft:5}}>
       <Text style = {{color:'white',}}>test</Text> 
       <Text style = {{color:'white',}}>test2</Text> 
     
     </View>
     </View>
     }                         
     
    ItemSeparatorComponent = {this.renderSeparator}
    keyExtractor = {item => item.key}
    horizontal={false}
       >
    </FlatList>   
    </View>
   );

}



};
     







export default FlatListScreen;

const styles = StyleSheet.create ({
 item:{
    padding:10,
     margin:15,
    // marginBottom:10,
    // marginLeft:10,
    // marginRight:10,
    // marginTop:10,

    height:44,
    borderColor:'red',
    borderWidth:1,
 },
 container:{
  flex:1,
 },


});