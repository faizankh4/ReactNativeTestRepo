import React, { Component } from 'react';
import { View, Text ,StyleSheet,Button,Image} from 'react-native';

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
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="red"
        />
      ),
    };
  };
  
 
  componentWillMount(){

   this.props.navigation.setParams({inreaseValue:this._increaseCount})
 
  }
 
  state = {
    count :0,
  };

  _increaseCount = () =>{
    this.setState({count:this.state.count +1});
  
  };
  
  
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
        <Text> Count:{this.state.count} </Text>
        <Button title='Add some friends' onPress={() => this.props.navigation.navigate('SettingScreen',{itemid:86,otherParam:'test string',})}/>
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




