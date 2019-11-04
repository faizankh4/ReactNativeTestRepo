import React, { Component } from 'react';
import {StyleSheet,View,TextInput,Button,FlatList,Text} from 'react-native';
import Listitem from './components/Listitem'
import {connect} from  'react-redux'
import {addPlace} from './action/place'
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

placeSubmitHandler = () =>
{
if(this.state.placename.trim() === '')
{
  return
}
else{
  this.props.add(this.state.placename);
}
}

placeNameChangeHandler = (value) =>
{
  this.setState({placename:value})
}

placeOutput = () =>
{
  return (
    <FlatList style = { styles.listContainer }
      data = { this.props.places }
      keyExtractor={(item, index) => index.toString()}
      renderItem = {({item})=> (
        <Listitem 
        placeName={item.value}
        />
      // <Text>{info.item.value}</Text>
      
        )}
    />
  )
}



render(){
   return(
      <View style={styles.container}>
      <View style = {styles.inputContainer}>
       <TextInput style = {styles.textInput}
                  placeholder = 'search places'
                  //value = {this.state.placename}
                  onChangeText = {this.placeNameChangeHandler}
                  >         
      </TextInput>   
       <Button style={styles.placeButton} onPress = {this.placeSubmitHandler} title = 'Add'>
       
     </Button>   
     
      
      </View>
      <View>
       <View style = {styles.listContainer}>
        {this.placeOutput()}
       </View> 
      </View> 
       
     
      </View>    
  
  
  
    );

}


}


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
  //   backgroundColor:'green',
},
placeButton:{
    width:'30%'
},
listContainer:{
  width:'100%'
} 

})

const mapStateProps = state => {
   return{
  places : state.places.places,
}
}


const mapDispatchToProps = dispatch => {
return{
add:(name) =>
{
  dispatch(addPlace(name))
}

}

}


export default connect(mapStateProps,mapDispatchToProps)(AppRouter);