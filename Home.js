import React, { Component } from 'react';
import { View, Text ,StyleSheet,Button,Image,Alert,Platform} from 'react-native';
//import { platform } from 'os';

class LogoTitle extends React.Component
{
    render(){
      return(
        <Image source={require('./images/blueDot.png')} 
         style={{width:30,height:30}}>
        </Image>
      );
    }
};

export class Home extends Component {

static navigationOptions = ({ navigation }) => {
  const p = navigation.state.params || {};
  return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={p.inreaseValue}
          title={navigation.getParam('itemid','default')}
          color="red"
          />
        
      ),
     headerLeft:(
       <Button onPress={()=> navigation.navigate('MyModal')}
               title='info'
               color={Platform.OS === 'ios'? 'red' : null}
       />
     ), 
    };
  };
  
 
  componentDidMount(){

   this.props.navigation.setParams({inreaseValue:this._increaseCount,itemid:'36'})
  
   
   console.log('did mount call')
  
  }
 
  componentWillMount(){

    console.log('will mount call')
  
  }
  
  
  componentDidUnmount(){
    console.log('will didmount call')
  }
  
  componentWillUnmount(){
    console.log('will unmount call')
  }
  
  state = {
    count :0,
  };

  _onPressButtonCall() {
    Alert.alert('method called');
  }


  
  _increaseCount = () =>{
    this.setState({count:this.state.count +1});
    console.log('Hi from React increase');
  };
  
  
  newMethod() {
    return 'will unmount call';
  }

  
 
  render() {
   const {navigation} = this.props;
   const p = navigation.state.params || {};
   
    const didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        console.debug('didBlur', payload);
      }
    );
    return (
      <View style={styles.container}>
        <Text>Home screen!</Text>
        <Text> Count:{this.state.count} </Text>
         <Text>{p.itemid}</Text> 
        <Button title='Add some friends' onPress={() => this.props.navigation.navigate('SettingScreen',{itemid:86,otherParam:'test string',})}/>
        <Button title='Add some friends2' onPress={this._onPressButtonCall}/>
        <Button title='open third screen' onPress={() => this.props.navigation.navigate({routeName:'ThirdScreen',key:'main0',params:{name:'Detail'}})}/>
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




