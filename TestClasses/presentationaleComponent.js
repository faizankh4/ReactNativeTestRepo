
import React, { Component } from 'react'
import {  Text,View} from 'react-native'

const presentationalComponent = (props) => {

  return (

     <View style={{backgroundColor:'red',flexDirection:'row',alignItems:'center',width:320,height:560}}>

        <Text>{props.myText}</Text>
        <Text>{props.deleteText}</Text>

         

       

     </View>

  )

}

export default presentationalComponent