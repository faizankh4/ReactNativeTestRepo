import React, { Component } from 'react';
import { View, Text ,StyleSheet,Button,Image,Alert,Platform} from 'react-native';
export class StaticCounter extends Component
{
    static navigationOptions = {
        title: `Same number, wow!`,
      };
    
      render() {
        return (
          <View style={styles.container}>
            {/* <Text style={styles.paragraph}>{this.props.value}</Text> */}
            <Text style={styles.paragraph}>{this.props.count1}</Text>
          </View>
        );
      }
}
export default StaticCounter

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