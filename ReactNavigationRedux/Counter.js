import React, { Component } from 'react';
import { View, Text ,StyleSheet,Button,Image,Alert,Platform} from 'react-native';
export class Counter extends Component
{
    static navigationOptions = {
        title: 'Counter!',
      };
    
      render() {
        return (
          <View style={styles.container}>
            {/* <Text style={styles.paragraph}>{this.props.value}</Text> */}
            <Text style={styles.paragraph}>{this.props.count1}</Text>
            <Button
              title="Increment"
              onPress={() => this.props.dispatch({ type: 'INCREMENT' })}
            />
            <Button
              title="Decrement"
              onPress={() => this.props.dispatch({ type: 'DECREMENT' })}
            />
    
            <Button
              title="Go to static count screen"
              onPress={() => this.props.navigation.navigate('StaticCounter')}
            />
          </View>
        );
      }

}
export default Counter

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });