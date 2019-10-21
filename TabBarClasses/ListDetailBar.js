import React, { Component } from 'react';
import { View, Text, Button,StyleSheet} from 'react-native';

export class ListDetailBar extends Component {
  
    render()
     {
      const {params} = this.props.navigation.state;
      return (
         <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Text>{params.item.name.first}</Text>
         
          </View>   
      
        );

      }


}

export default ListDetailBar;