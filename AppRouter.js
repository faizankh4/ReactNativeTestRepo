import React, {Componenet} from 'react';
import {Text,StyleSheet,View,TextInput,Button} from 'react-native';

export class AppRouter extends React.Component 
{
   
state = {
 placename : '',
 places:[],

}


 placementSubmittHandler = () =>
{
 console.log("submitted");
}
render(){
   return(
      <View style={styles.container}>
      <View style = {styles.inputContainer}>
       <TextInput style = {styles.textInput}
                  placeholder = 'Edit'>         
      </TextInput>   
       <Button style={styles.placeButton} onPress = {this.placementSubmittHandler} title = 'submit'>
       
     </Button>   
     
      
      </View>
      </View>    
  
  
  
    );

}


}
export default AppRouter;

const styles = StyleSheet.create(
{
  container:{
      paddingTop:30,
      justifyContent:'flex-start',
      alignItems:'center',
    //  backgroundColor:'red',
     
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
  // backgroundColor:'green',
  
  },
  textInput:{
     width:'70%',
},
placeButton:{
    width:'30%'
},
 

})