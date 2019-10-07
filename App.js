/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigator';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Allie',
        'Gator',
        'Lizzie',
      ],
      currentFriends: [],
    }
  }

  addFriend = (index) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state

    // Pull friend out of possibleFriends
    const addedFriend = possibleFriends.splice(index, 1)

    // And put friend in currentFriends
    currentFriends.push(addedFriend)

    // Finally, update our app state
    this.setState({
      currentFriends,
      possibleFriends,
    })
  }

  
  render() {
    return (
     <AppNavigator/>
    //  screenProps={ {
    //   currentFriends: this.state.currentFriends,
    //   possibleFriends: this.state.possibleFriends,
    //   addFriend: this.addFriend,
    // } }
    
     );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
