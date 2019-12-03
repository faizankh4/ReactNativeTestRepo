import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text ,Button,Platform} from 'react-native';
// import all basic components
 
export default class HomeDafza extends Component {
    static navigationOptions = ({navigation}) => {
        return {
       //  title:'Home',
        headerRight:(
          <Button  onPress={() => navigation.navigate('Detail',{itemid:4,otherparam:'Detail_screen'})} 
                  title='leftButton'
                  color={Platform.OS === 'ios' ? 'red' : 'blue'}
          />
        ),
      }
      
     };



  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> HomeDafza </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});