
import React, { Component } from 'react'
import {  Text,View,StyleSheet,TextInput} from 'react-native'

const presentational = (props) => {

  
   return (

     <View style={{backgroundColor:'red',flexDirection:'column',alignItems:'center'}}>

        <Text style={styles.textStyle}>{props.myText}</Text>
        <Text style={styles.textStyle}>{props.deleteText}</Text>
        <Text style={styles.textStyle}>{props.anothertext}</Text>
       
      
     </View>

  )

}

export default presentational
const styles = StyleSheet.create(
   {
      textStyle:{
        fontSize:15,
        color:'green',
        fontWeight:'normal',
        marginTop:10,
        marginBottom:10,
        marginRight:10,
        marginLeft:10,

      },
   }
);
