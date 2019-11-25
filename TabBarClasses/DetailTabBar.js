import React from 'react';
import { Button, Text, View ,navigation,ScrollView,StyleSheet} from 'react-native';

const arrRow = [{Key:'goBack',navigateKey:''},{Key:'goToTestScreen',navigateKey:'Test1'},{Key:'GridFlatList',navigateKey:'GridFlatListscreen'},{Key:'goToTestInputscreen',navigateKey:'inputscreen'},{Key:'goToScrollBar',navigateKey:'scrollBarScreen'},{Key:'goToFlatList',navigateKey:'FlatListScreen'},{Key:'goToAddsubView',navigateKey:'AddsubviewScreen'},{Key:'horizontalflatList',navigateKey:'horizontalflatListscreen'}];


class DetailsScreen extends React.Component {
   static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    const itemid = params ? params.itemid : null;
    const otherValue = params ? params.otherparam : null;
    return{
      title:otherValue,
    }
    
  
  };
  makeList = (item) =>
  {
    const navigateionkey = item.navigateKey;
    
    if(item.navigateKey === '')
     {
      return(
     <Button title={item.Key}onPress={() =>this.props.navigation.goBack() }  color = 'blue'  key={item.Key}/>
      );
    }
     else{
      return(
      <Button title={item.Key} onPress={() => this.props.navigation.navigate(navigateionkey) } key={item.Key}/>
      );
    }
   
  }
 
 
  render() {
      const param = this.props.navigation.state.params;
      const {navigation} = this.props;
     
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
          <Text>{param.otherparam}</Text>
          {/* <Button title='goBack' onPress={() => navigation.goBack()}/>
          <Button title='goToTestScreen' onPress={() => navigation.navigate('Test1')}/>
          <Button title = 'GridFlatList' onPress = {() => navigation.navigate('GridFlatListscreen')}/>
          <Button title='goToTestInputscreen' onPress={() => navigation.navigate('inputscreen')}/>
          <Button title='goToScrollBar' onPress={() => navigation.navigate('scrollBarScreen')}/>
          <Button title='goToFlatList' onPress={() => navigation.navigate('FlatListScreen')}/>
          <Button title='goToAddsubView' onPress={() => navigation.navigate('AddsubviewScreen')}/>
          <Button title='horizontalflatList' onPress={() => navigation.navigate('horizontalflatListscreen')}/> */}
          
            <ScrollView style = {{flex:1,backgroundColor:'trabsparent'}}>
             {arrRow.map(this.makeList)} 
            </ScrollView> 
        
        
        </View>
      );
    }
  }

  export default (DetailsScreen);
  
  const styles = StyleSheet.create(
    {
      list:{
        margin:10,
        padding: 10,
        borderWidth:1,
        borderColor:'grey',
        backgroundColor:'green'
      }
    }
  );
