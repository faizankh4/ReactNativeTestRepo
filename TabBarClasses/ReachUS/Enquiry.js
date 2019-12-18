import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,ScrollView,Button,TouchableOpacity,TextInput,Image,Alert} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import all basic components
 
 let textStr = 'Fields with(*) mandatory fields Kindly note that the forms must be filled in English';


export default class Enquiry extends Component {
  //Screen2 Component
  constructor(){
    super()
   this.state = {
     firstVar:'',
     ListItem:[
     {name:'Name',id:1},
     {name:'Company',id:2},
     {name:'Category',id:3},
     {name:'Tel/Mobile',id:4},
     {name:'Fax',id:5},
     {name:'Country',id:6},
     {name:'E-Mail',id:7},
     {name:'Subject',id:8},
     {name:'message',id:19},

     ]
   
 }


 }
 
   popoverOpenClass = () =>
   {

      Alert.alert('popover button press')
   }
 
   renderScrollviewItem = (item,index) =>
   {
    
     if (index === 8)
     {
      return(
        <View style = {{margin:5,
          padding:10,
          height:80,
         // borderColor:'grey',
         // borderWidth:1,
          backgroundColor:'',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'flex-start',
          }}>
        
        <Text style = {{color:'white',fontSize:12,fontWeight:'500',width:55,}}>
        {item.name}
        </Text>
        <Text style = {{flex:0.1,color:'white'}}>
          *
         </Text>
        <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5,height:75}]} 
              underlineColorAndroid = 'transparent'
              placeholder = ''
              placeholderTextColor = '#9a73ef'
              autoCapitalize = 'none'
              onChangeText = {(emailvalue) => this.handelEmail(emailvalue)}
              multiline
         />
      
      
      </View> 

      )


     }
     else if (index === 2)
     {
      return(
        <View style = {{margin:5,
          padding:10,
          height:35,
         // borderColor:'grey',
         // borderWidth:1,
          backgroundColor:'',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'flex-start',
          }}>
        
        <Text style = {{color:'white',fontSize:12,fontWeight:'500',width:55,}}>
        {item.name}
        </Text>
        <Text style = {{flex:0.1,color:'white'}}>
          *
       
         </Text>
         <TouchableOpacity style = {{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5,height:25,flexDirection:'row',alignItems:'center'}}
                           onPress = {() => this.popoverOpenClass()} 
         >
        <Text style = {{backgroundColor:'',height:25,flex:1}} 
         
        >
        </Text>
       
        <Image style = {{width:15,height:15,resizeMode:'contain'}}
               source = {require('./../../images/drop_down.png')}
        >
       
        </Image>
        </TouchableOpacity>
     
      </View> 

      )
     
    
     }
     else{
    return(
        <View style = {{margin:5,
          padding:10,
          height:35,
         // borderColor:'grey',
         // borderWidth:1,
          backgroundColor:'',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'flex-start',
          }}>
        
        <Text style = {{color:'white',fontSize:12,fontWeight:'500',width:55,}}>
        {item.name}
        </Text>
        <Text style = {{flex:0.1,color:'white'}}>
          *
         </Text>
        <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5}]} 
              underlineColorAndroid = 'transparent'
              placeholder = ''
              placeholderTextColor = '#9a73ef'
              autoCapitalize = 'none'
              onChangeText = {(emailvalue) => this.handelEmail(emailvalue)}
         />
      
      
      </View> 

      )
        }
   }
 
   handelEmail = (text) => {
    this.setState({email:text})
}
 
 
   makeList = (item) =>
   (
   
   
   
   
    <View style = {{margin:5,
        padding:10,
        height:35,
       // borderColor:'grey',
       // borderWidth:1,
        backgroundColor:'',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        }}>
      
      <Text style = {{color:'white',fontSize:12,fontWeight:'500',width:55,}}>
      {item.name}
      </Text>
      <Text style = {{flex:0.1,color:'white'}}>
        *
       </Text>
      <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5}]} 
            underlineColorAndroid = 'transparent'
            placeholder = ''
            placeholderTextColor = '#9a73ef'
            autoCapitalize = 'none'
            onChangeText = {(emailvalue) => this.handelEmail(emailvalue)}
       />
    
    
    </View>

   
   );
 
 
 
 
   render() {
    return (
      // <View style={styles.MainContainer}>
       
       <KeyboardAwareScrollView
      style={{ backgroundColor: 'rgba(15, 48, 72, 1.0)' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.MainContainer}
     // scrollEnabled={false}
       >
      
        {/* <ScrollView style = {{flex:1, backgroundColor:''}}>
         {this.state.ListItem.map(this.makeList)}
       
        </ScrollView> */}

            <ScrollView>
               {
                  this.state.ListItem.map((item, index) => (
                    
                     this.renderScrollviewItem(item,index)
                    ))
               }
            </ScrollView>
        <View style = {{height:80,backgroundColor:'rgba(15, 48, 72, 1.0)'}}>
        <Text style = {{fontSize:10,color:'white',margin:10}}>
        {textStr}
        </Text> 
        <View style = {{flexDirection:'row',justifyContent:'space-around',alignItems:'center',
        backgroundColor:'',flex:1}}>

      
        <TouchableOpacity style = {{backgroundColor:'white',borderRadius:5,width:70,height:25,alignItems:'center',justifyContent:'center'}} 
        onPress={() => this.test()}>
            
            <Text style = {{color:'rgba(15, 48, 72, 1.0)',fontSize:12,fontWeight:'500'}}>
             Cancel
            </Text>    
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.test()}
                            style = {{backgroundColor:'white',borderRadius:5,width:70,height:25,alignItems:'center',justifyContent:'center'}}
          >
            
            <Text style = {{color:'rgba(15, 48, 72, 1.0)',fontSize:12,fontWeight:'500'}}>
             Submit
            </Text>    
          </TouchableOpacity>
       
    
       
        </View>    
       
       
       
       </View>
       
       </KeyboardAwareScrollView>
       
      //  </View> 
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  //  paddingTop: 20,
   // alignItems: 'center',
  //  marginTop: 50,
    //justifyContent: 'center',
    backgroundColor:'rgba(15, 48, 72, 1.0)',
      
},input:{
   // margin:15,
    height:25,
   // borderColor:'grey',
   // borderWidth:1, 
 },
 item: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 30,
  margin: 2,
  borderColor: '#2a4944',
  borderWidth: 1,
  backgroundColor: '#d2f7f1'
}

});