import React, { Component } from 'react';
import { View, Text ,StyleSheet,Button,Image,Alert,} from 'react-native';

export class ModalScreen extends React.Component {
 render(){
    return(
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'white'}}>
         <Text>this is a modal</Text>
         <Button 
         onPress={() => this.props.navigation.goBack()}
         title='Dismiss'
        />
        </View>
    
    )
 
 }

};

export default (ModalScreen)