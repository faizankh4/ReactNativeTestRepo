import React from 'react';
import { Button, Text, View, Alert, Platform} from 'react-native';
class HomeScreen extends React.Component {
 /* static navigationOptions = ({navigation}) => {
    return {
     title:'Home',
    headerLeft:(
      <Button  onPress={() => navigation.navigate('Detail',{itemid:4,otherparam:'Detail_screen'})} 
              title='leftButton'
              color={Platform.OS === 'ios' ? 'red' : 'blue'}
      />
    ),
  }
  
 };*/
 
 _onPressButtonCall() {
  Alert.alert('method called');
}
  
 
 render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <Button
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate('Settings')}
          />
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Detail',{itemid:4,otherparam:'Detail_screen'})}
          />
          <Button title='Alert method' onPress={this._onPressButtonCall}/>
        
        </View>
      );
    }
  }

  export default(HomeScreen)