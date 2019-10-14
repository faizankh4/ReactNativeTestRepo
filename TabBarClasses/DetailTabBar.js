import React from 'react';
import { Button, Text, View ,navigation} from 'react-native';
class DetailsScreen extends React.Component {
   static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    const itemid = params ? params.itemid : null;
    const otherValue = params ? params.otherparam : null;
    return{
      title:otherValue,
    }
    
  
  };

  render() {
      const param = this.props.navigation.state.params;
      const {navigation} = this.props;
     
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
          <Text>{param.otherparam}</Text>
          <Button title='goBack' onPress={() => navigation.goBack()}/>
        </View>
      );
    }
  }

  export default (DetailsScreen)