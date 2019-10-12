import React, { Component } from 'react';
import { View, Text, Button,StyleSheet} from 'react-native';
export class Setting extends Component
{
//    static navigationOptions = {
//        title:'Detail',
//    };

static navigationOptions = ({navigation}) => {
    return {
     title: navigation.getParam('otherParamValue','default_value'),
     headerStyle:{
         backgroundColor:'white',
     },
    // headerTintColor:'black',
    headerTitleStyle:{
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'normal',
        color:'red',
    }

   
 
    }
};

render(){
    const { navigation } = this.props;
    return(
    <View style={styles.container}>
     <Text> Detailed screen! </Text>
     <Text>
          itemId: {JSON.stringify(navigation.getParam('itemid', 'NO-ID'))}
        </Text>
       <Text>
           otherparam:{JSON.stringify(this.props.navigation.getParam('otherParam','default_value'))} 
           </Text>
           <Text>
           otherparam2:{JSON.stringify(this.props.navigation.getParam('otherParam','default_value'))} 
           </Text>
     
     <Button title='Back to home' onPress={() => this.props.navigation.navigate('HomeScreen')}/>
    {/* <Button title='go to setting again!' onPress={() => this.props.navigation.push('SettingScreen')}/>
    <Button title='go back' onPress={() => this.props.navigation.goBack()}/> */}
     <Button title='update title ' onPress={() => this.props.navigation.setParams({otherParamValue:'updated'})}/>
    </View>   
)

}


};
export default Setting;
const styles = StyleSheet.create
({
 container:{
 flex:1,
 alignItems:'center',
 justifyContent:'center',
 flexDirection:'column',
 },
});