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
 
   
   _onChangetetx = (key,value) =>
   {
     this.setState({[key]:value});
   }

     handelEmail = (text) => {
        this.setState({email:text})
    }
    handelPassword = (text) =>{
         this.setState({password:text})
    }
   
    login = (email,password) => {
      Alert.alert('email   ' + email + 'password   ' + password);
    };
  
  
    signIn = () => {
      var username = this.refs.username._lastNativeText;
      var password = this.refs.password._lastNativeText;
  
     Alert.alert('username is :' + username + 'password is :' + password); //doesn't work
      //Alert.alert(password); //doesn't work
    }
  
  
    render(){
   return(
      <View style = {styles.container}>
       <TextInput style = {styles.input} 
            underlineColorAndroid = 'transparent'
            placeholder = 'Email'
            placeholderTextColor = '#9a73ef'
            autoCapitalize = 'none'
           // ref= {(el) => { this.email = el; }}
           // onChangeText = {(emailvalue) => this.handelEmail(emailvalue)}
           // onChangeText = {(email) => this.setState({email})}
           // value = {this.state.email}
           //onChangeText = {(text) => this._onChangetetx('email',text)}
           ref = 'username'
       />
      <TextInput style={styles.input}
           underlineColorAndroid = 'transparent'
           placeholder = 'password'
           placeholderTextColor = '#9a73ef' 
           autoCapitalize = 'none'
          // onChangeText = {(passwordValue) => this.handelPassword(passwordValue)}
           secureTextEntry = 'yes'
          // ref = 'password'
         //  onChangeText = {(text) => this.setState({text})}
          // onChangeText = {(text) => this._onChangetetx('password',text)}
          ref = 'password'
      />
                
      <TouchableOpacity
        style = {styles.submittbutton}
        onPress = {() => this.login(this.state.email,this.state.password)}>
        
        <Text style = {styles.submittButtonText}>Submitt</Text>
       
        </TouchableOpacity>

        <TouchableOpacity
        style = {styles.submittbutton}
        onPress = {this.signIn.bind(this)}>
        
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