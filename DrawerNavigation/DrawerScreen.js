import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View,StyleSheet} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
//import styles from '../../styles/index';

class DrawerScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View style = {{backgroundColor:'green',flex:1}}>
        <ScrollView style = {{paddingTop:20}}>
          <View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Screen1')}>
                Home
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Screen2')}>
               About
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Screen3')}>
              Contact
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default (DrawerScreen);


const styles = StyleSheet.create({
    menuItem:{
     flex:1,
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
     
    },

});