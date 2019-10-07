import React, { Component } from 'react';
import { View, Text ,StyleSheet,Button} from 'react-native';

export class Home extends Component {

  render() {
    const didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        console.debug('didBlur', payload);
      }
    );
    return (
      <View style={styles.container}>
        <Text>Home screen!</Text>
        <Button title='Add some friends' onPress={() => this.props.navigation.navigate('SettingScreen',{itemid:86,otherParam:'test string',})}/>
        <Button title='open third screen' onPress={() => this.props.navigation.navigate({routeName:'ThirdScreen',key:'main0',params:{name:'faizan'}})}/>
      </View>
    )
  }
};

// const didBlurSubscription = this.props.navigation.addListener(
//   'didBlur',
//   payload => {
//     console.debug('didBlur', payload);
//   }
// );



export default Home

const styles = StyleSheet.create
({
 container:{
 flex:1,
 alignItems:'center',
 justifyContent:'center',
 flexDirection:'column',
 },
});




