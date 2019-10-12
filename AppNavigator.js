import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import setting from './Setting';
import Home from './Home';
import Third from './Thirdscreen';
import MyModalScreen from './ModalScreen'
// const AppNavigator = createStackNavigator({
//     HomeScreen: { screen: Home },
//     SettingScreen: { screen: setting },
//     ThirdScreen:{
//      screen:Third
//     },
   
//     // HomeScreen:Home ,
//     // SettingScreen: setting,
//     // ThirdScreen: Third
//     },
//   {
//       initialRouteName:'HomeScreen',
//       defaultNavigationOptions:{
//         headerStyle:{
//             backgroundColor:'white',
//         },
//        // headerTintColor:'black',
//        headerTitleStyle:{
//            fontWeight: 'bold',
//            fontSize: 20,
//            fontStyle: 'italic',
//            color:'blue',
//        },
//       },
    
//  },
  
    
// );

// const RootStack = createStackNavigator({
// Main:
// {
//     screen:AppNavigator,
// },
// MyModal:
// {
// screen:MyModalScreen,
// },

// });

const MainStack = createStackNavigator(
    {
      Home: {
        screen: Home,
      },
      SettingScreen: {
        screen: setting,
      },
      ThirdScreen:{
              screen:Third,
         },
    },
    {
              initialRouteName:'Home',
              defaultNavigationOptions:{
                headerStyle:{
                    backgroundColor:'white',
                },
               // headerTintColor:'black',
               headerTitleStyle:{
                   fontWeight: 'bold',
                   fontSize: 20,
                   fontStyle: 'italic',
                   color:'blue',
               },
              },
            }
  );
  
  const RootStack = createStackNavigator(
    {
      Main: {
        screen: MainStack,
      },
      MyModal: {
        screen: MyModalScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);


const App = createAppContainer(RootStack);

export default App;