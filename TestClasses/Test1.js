import React from 'react';
import {View,StyleSheet,Text,Button,TextInput} from 'react-native';
import PComponent from './presentationaleComponent'

export class NativeSample extends React.Component{

 constructor() {
  super()
this.state = {
 firstVar:'',
 text:''
}

 
}
_hidetext = () => {
    if(this.state.firstVar == 'it display using state')
    {
        this.setState({firstVar:''});
    }
    else{
        this.setState({firstVar:'it display using state'});  
    }
   
}

render(){
 return(
//   <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'blue'}}>
//    {/* <Text>{this.state.firstVar}</Text>
//   <Button title='hideText' onPress={this._hidetext}> </Button> */}
//    <p
//     MyText = {this.state.firstVar}
//     deleteText = {this._hidetext}
//    />
//  </View
<View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

{/* <PComponent

myText = {this.state.firstVar}

deleteText = 'testString'
anothertext = 'anotherTestString'

/> */}
<TextInput 
style={{height:40,borderColor:'gray',borderWidth:1}}
placeholder='Type your text'
onChangeText={(firstVar1) => this.setState({firstVar:firstVar1})}
/>
<Text style={{padding:10,fontSize:42}}>{this.state.firstVar}</Text>

</View>
);

}


};

export default NativeSample;