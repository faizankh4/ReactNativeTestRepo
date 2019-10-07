import React, { Component } from 'react';
import { View, Text, Button,StyleSheet} from 'react-native';
export class thirdscreen extends Component
{
render(){
    const { navigation } = this.props;
    return(
    <View style={styles.container}>
     <Text> third screen! </Text>
     <Text> name is :{this.props.navigation.state.params.name}</Text>
     <Button title='Back to home' onPress={() => this.props.navigation.navigate('HomeScreen')}/>
    {/* <Button title='go to setting again!' onPress={() => this.props.navigation.push('SettingScreen')}/>
    <Button title='go back' onPress={() => this.props.navigation.goBack()}/> */}
    </View>   
)

}


};
export default thirdscreen;
const styles = StyleSheet.create
({
 container:{
 flex:1,
 alignItems:'center',
 justifyContent:'center',
 flexDirection:'column',
 },
});