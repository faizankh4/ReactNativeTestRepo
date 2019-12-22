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
import AboutUs from './../TabBarClasses/AboutUs';
import Services from './../TabBarClasses/Services';
import loginTababr from './../TabBarClasses/LoginTabbar';
import Moretabbar from './../TabBarClasses/MoreTabBar';
import HappinessTabbar from './../TabBarClasses/HappinestabBar';
import HomeDafzascreen from './../TabBarClasses/HomeDafza';
import ReachUsScreen from './../TabBarClasses/ReachUS/ReachUsFile'
import EnquiryScreen from './../TabBarClasses/ReachUS/Enquiry'

const HomeStack = createStackNavigator({
 Home:{screen:HomeDafzascreen,
  navigationOptions:({navigation}) =>({
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
   title:'WELCOME',
    headerStyle:{
        backgroundColor:'rgba(15, 48, 72, 1.0)',
    },
   headerTintColor:'black',
   headerTitleStyle:{
       fontWeight: '500',
       fontSize: 20,
       fontStyle: 'normal',
       color:'white',
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
 AboutUsScreen:{
   screen:AboutUs,
 },
 ServicesScreen:{
   screen:Services,
 },

},
{
  initialRouteName:'Home',
}


);

const SettingStack = createStackNavigator({
  ReachUS:{screen:ReachUsScreen,
    navigationOptions:({navigation}) =>({
     // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
     title:'REACH US',
      headerStyle:{
          backgroundColor:'rgba(15, 48, 72, 1.0)',
      },
     headerTintColor:'black',
     headerTitleStyle:{
         fontWeight: '500',
         fontSize: 20,
         fontStyle: 'normal',
         color:'white',
     },
    }),
  },
  Settings:{screen:SettingsScreen},
  Detail:{screen:Detailscreen},
  WebviewScreen:{screen:WebviewScreen},
  EnquiryScreen:{screen:EnquiryScreen,
    navigationOptions:({navigation}) =>({
      // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      
      title:'ENQUIRY',
       headerStyle:{
           backgroundColor:'rgba(15, 48, 72, 1.0)',
       },
      headerTintColor:'white',
      headerTitleStyle:{
          fontWeight: '500',
          fontSize: 20,
          fontStyle: 'normal',
          color:'white',
      },
     }),
  
  },


},
{
  initialRouteName:'ReachUS',
}


);

SettingStack.navigationOptions = ({navigation}) => {
 
  let tabBarVisible = true;
  let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'EnquiryScreen' ) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}



const Loginstack = createStackNavigator({
  inputscreen:{screen:inputScreen},
  Loginscreen:{screen:loginTababr},
 
});

const MoreStack = createStackNavigator({
  Moretabbarscreen:{screen:Moretabbar},
 
});

const Happinessstack = createStackNavigator({
  HappinessTabbarScreen:{screen:HappinessTabbar},
 
});

const Tabs = createBottomTabNavigator(
  {
    Home:{screen:HomeStack,
      navigationOptions:({navigation}) =>({
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => {
          const image = focused
          ? require('./../images/BottamBarimages/home_yell.png')
          : require('./../images/BottamBarimages/home.png')
          return (
              <Image
                  source={image}
                  style={{height:27, width:23,resizeMode:'contain'}}
              />
          )
  
        },
     
      }
      
      ),
    },

    Reachus:{screen:SettingStack,
      navigationOptions:({navigation}) =>({
        tabBarLabel: 'Reach us',
        tabBarIcon: ({ focused, tintColor }) => {
          const image = focused
          ? require('./../images/BottamBarimages/reach_yell.png')
          : require('./../images/BottamBarimages/reach.png')
          return (
              <Image
                  source={image}
                  style={{height:27, width:23,resizeMode:'contain'}}
              />
          )
  
        },
      }),

    }, Happiness:{screen:Happinessstack,
      navigationOptions:({navigation}) =>({
        tabBarLabel: 'Happiness',
        tabBarIcon: ({ focused, tintColor }) => {
          const image = focused
          ? require('./../images/BottamBarimages/HMYellow.png')
          : require('./../images/BottamBarimages/HMWhite.png')
          return (
              <Image
                  source={image}
                  style={{height:27, width:23,resizeMode:'contain'}}
              />
          )
  
        },
      }),

    }, Login:{screen:Loginstack,
      navigationOptions:({navigation}) =>({
        tabBarLabel: 'Login',
        tabBarIcon: ({ focused, tintColor }) => {
          const image = focused
          ? require('./../images/BottamBarimages/login_tab_yell.png')
          : require('./../images/BottamBarimages/login_tab.png')
          return (
              <Image
                  source={image}
                  style={{height:27, width:23,resizeMode:'contain'}}
              />
          )
  
        },
      }),

    },MorestackTab:{screen:MoreStack,
      navigationOptions:({navigation}) =>({
        tabBarLabel: 'More',
        tabBarIcon: ({ focused, tintColor }) => {
          const image = focused
          ? require('./../images/BottamBarimages/activity_yell.png')
          : require('./../images/BottamBarimages/activity.png')
          return (
              <Image
                  source={image}
                  style={{height:27, width:23,resizeMode:'contain'}}
              />
          )
  
        },
      }),

    }
  },
 {
    //  defaultNavigationOptions:({navigation}) =>({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //        const { routeName } = navigation.state;
    //        let iconName;
    //        if (routeName === 'Home') {
    //         // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //        } else if (routeName === 'Reachus') {
    //          iconName = `ios-options${focused ? '' : '-outline'}`;
    //        }
   
    //        // You can return any component that you like here! We usually use an
    //        // icon component from react-native-vector-icons
    //        return <Ionicons name={iconName} size={25} color={tintColor}/>;
    //      },

        
  

    //  }),
     tabBarOptions: {
       activeTintColor: 'yellow',
       inactiveTintColor: 'white',
       style: {
        backgroundColor: 'rgba(15, 48, 72, 1.0)',
        // height: 80,
        // borderTopColor: 'transparent',
        // borderTopWidth: 1,
        // paddingRight: 10,
        // paddingLeft: 10,
        // borderTopWidth: 1,
      //  borderTopColor: grayPlaceHolder
    },
    labelStyle: {
      fontSize: 10,
      
  },  
    
   },
     animationEnabled: false,
     swipeEnabled: false,
   //  backgroundColor:'rgba(15, 48, 72, 1.0)',
 
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
              source={require('./../images/menu.png')}
              style={{ width: 25, height: 25, marginLeft: 5,resizeMode:'contain'}}
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
    drawerWidth: 200,  
  }
  
  );
   
  export default createAppContainer(DrawerNavigatorExample);
