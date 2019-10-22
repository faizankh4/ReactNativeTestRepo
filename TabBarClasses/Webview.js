import React, { Component } from 'react';
import { View, Text, Button,StyleSheet,WebView,Picker} from 'react-native';

export class webviewClass extends Component {
  
     state = {
         lamguage:'',
     }
  
     updateUser = (value) =>
     {
       this.setState({user:value})

     }
   
     render()
    {
       return (
        <View style={styles.container}>  
        <Text style={styles.textStyle}>PickerExample</Text>  
        <Picker style={styles.pickerStyle}  
                selectedValue={this.state.lamguage}  
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }>
                 
                
                    {/* onValueChange={this.updateUser} >  */}
             
            <Picker.Item label="Java" value="java" />  
            <Picker.Item label="JavaScript" value="js" />  
            <Picker.Item label="React Native" value="rn" />  
        </Picker>  
        <Text style={styles.textStyle}> {"Index ="+this.state.language}</Text>  
    </View>  
      
        )

    }
}




export default webviewClass;

const styles = StyleSheet.create(
{
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
   },
textStyle:{
 margin:25,
 fontSize:25,
 fontWeight:'bold',
 textAlign:'center'
},
pickerStyle:{
    height:150,
    width:'180%',
    color:'#344953',
    justifyContent: 'center',

},

}
)