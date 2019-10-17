import React,{Componenet} from 'react';
import {Text,TextInput,View,TouchableOpacity,StyleSheet,Alert} from 'react-native';
export class InputTabbar extends React.Component {

    static navigationOptions = {
        title: 'InputScreen',
      };
  
     state = {
       email:'',
       password:'',
     };
 
    handelEmail = (text) => {
        this.setState({email:text})
    }
    handelPassword = (text) =>{
         this.setState({password:text})
    }
   
    login = (email,password) => {
      Alert.alert('email   ' + email + 'password   ' + password);
    };
  
    render(){
   return(
      <View style = {styles.container}>
       <TextInput style = {styles.input} 
            underlineColorAndroid = 'transparent'
            placeholder = 'Email'
            placeholderTextColor = '#9a73ef'
            autoCapitalize = 'none'
            onChangeText = {(emailvalue) => this.handelEmail(emailvalue)}
       />
      <TextInput style={styles.input}
           underlineColorAndroid = 'transparent'
           placeholder = 'password'
           placeholderTextColor = '#9a73ef' 
           autoCapitalize = 'none'
           onChangeText = {(passwordValue) => this.handelPassword(passwordValue)}
           secureTextEntry = 'yes'
      />
                
      <TouchableOpacity
        style = {styles.submittbutton}
        onPress = {() => this.login(this.state.email,this.state.password)}>
        
        <Text style = {styles.submittButtonText}>Submitt</Text>
       
        </TouchableOpacity>
      
      </View>   
   );
  

};

} 

export default InputTabbar

const styles = StyleSheet.create({
 container:{
    paddingTop:23,
     backgroundColor:'white',
     flex:1,
     flexDirection:'column'
 },
 input:{
   margin:15,
   height:40,
   borderColor:'grey',
   borderWidth:1, 
},
submittbutton:{
    backgroundColor:'#7a42f4',
    padding:10,
    margin:15,
    height:40,
},
submittButtonText:{
    color:'white',
},

});