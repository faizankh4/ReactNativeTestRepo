import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';
import PresentationalComponent from './presentationaleComponent'

export class NativeSample extends React.Component{

 constructor() {
  super()
this.state = {
 firstVar:'it display using state',

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

<PresentationalComponent

myText = {this.state.firstVar}

deleteText = 'testString'

/>

</View>
);

}


};

export default NativeSample;