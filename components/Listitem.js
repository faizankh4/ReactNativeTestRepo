import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
const Listitem = (props) => {
  return(
    <TouchableOpacity>
    <View style = {styles.listItem }>
     <Text>{props.placeName}</Text>
     </View>
   
    </TouchableOpacity>
  );


}

const styles = StyleSheet.create({
 listItem:{
   padding:10,
   marginBottom:10,
   width:'100%',
   backgroundColor:'#eee'
 },

});

export default Listitem