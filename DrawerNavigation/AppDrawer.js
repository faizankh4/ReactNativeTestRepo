import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import DrawerScreen from './DrawerScreen'
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './../TabBarClasses/HomeTabbar';
import Detailscreen from './../TabBarClasses/DetailTabBar';
import SettingsScreen from './../TabBarClasses/SettingTabbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Test1Screen from './../TestClasses/Test1'
import inputScreen from './../TabBarClasses/InputTabbar'
import scrollBarScreen from './../TabBarClasses/ScrollBar'
import FlatListScreen from './../TabBarClasses/FlatListscreen'
import ListDetailBarScreen from './../TabBarClasses/ListDetailBar' 
import WebviewScreen from './../TabBarClasses/Webview'
import Addsubview from'./../TabBarClasses/Addsubview'
import horizontalflatList from './../TabBarClasses/horizontalFlatList'
import GridFlatList from './../TabBarClasses/GridFlatList'
const HomeStack = createStackNavigator({
 Home:{screen:HomeScreen,
  navigationOptions:({navigation}) =>({
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle:{
        backgroundColor:'white',
    },
   headerTintColor:'black',
   headerTitleStyle:{
       fontWeight: 'bold',
       fontSize: 20,
       fontStyle: 'italic',
       color:'blue',
   },
  }),

},
 Detail:{screen:Detailscreen},
 Test1:{screen:Test1Screen},
 inputscreen:{screen:inputScreen},
 scrollBarScreen:{screen:scrollBarScreen},
 FlatListScreen:{screen:FlatListScreen},
 ListDetailBarScreen:{screen:ListDetailBarScreen},
 AddsubviewScreen:{
   screen:Addsubview 
 },
 horizontalflatListscreen:{
   screen:horizontalflatList
 },
 GridFlatListscreen:{
  screen:GridFlatList,
 },
},
{
  initialRouteName:'Home',
}


);

const SettingStack = createStackNavigator({
  Settings:{screen:SettingsScreen},
  Detail:{screen:Detailscreen},
  WebviewScreen:{screen:WebviewScreen},
});


const Tabs = createBottomTabNavigator(
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
  
);




class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
   
    componentDidMount (){
        SplashScreen.hide();
       }
    render() {
      return (
        <View style={{ flexDirection: 'row',backgroundColor:'transparent'}}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <Image
              source={require('./../images/drawer.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }
   
  const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: Screen1,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 1',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
         // backgroundColor: '#FF9800',
          backgroundColor: 'green',
        },
       // headerTintColor: '#fff',
        headerTintColor: 'red',
      }),
    },
  });
   
  const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
      screen: Screen2,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 2',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
   
  const Screen3_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
      screen: Screen3,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 3',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });
   
  const DrawerNavigatorExample = createDrawerNavigator({
    //Drawer Optons and indexing
    Screen1: {
      //Title
      screen:Tabs,
      navigationOptions: {
        drawerLabel: 'Demo Screen 4',
      },
    },
    Screen2: {
      //Title
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 5',
      },
    },
    Screen3: {
      //Title
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 6',
      },
    },
  },
  {
    initialRouteName: 'Screen1',
    contentComponent: DrawerScreen,
   // drawerWidth: 250,  
  }
  
  );
   
  export default createAppContainer(DrawerNavigatorExample);
