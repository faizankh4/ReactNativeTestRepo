
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './HomeTabbar';
import Detailscreen from './DetailTabBar';
import SettingsScreen from './SettingTabbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Test1Screen from './../TestClasses/Test1'
import inputScreen from './InputTabbar'
import scrollBarScreen from './ScrollBar'
const HomeStack = createStackNavigator({
 Home:{screen:HomeScreen},
 Detail:{screen:Detailscreen},
 Test1:{screen:Test1Screen},
 inputscreen:{screen:inputScreen},
 scrollBarScreen:{screen:scrollBarScreen},
});

const SettingStack = createStackNavigator({
  Settings:{screen:SettingsScreen},
  Detail:{screen:Detailscreen},
  
});

export default createAppContainer(createBottomTabNavigator(
 {
     Home1:{screen:HomeStack},
     Settings1:{screen:SettingStack},  
 },
  {
      defaultNavigationOptions:({navigation}) =>({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home1') {
             // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Settings1') {
              iconName = `ios-options${focused ? '' : '-outline'}`;
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
     

      }),
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
      },
      animationEnabled: false,
      swipeEnabled: false,
  
    }
   


)

);

