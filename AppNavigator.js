import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import setting from './Setting';
import Home from './Home';
import Third from './Thirdscreen';
const AppNavigator = createStackNavigator({
    // HomeScreen: { screen: Home },
    // SettingScreen: { screen: setting },
    // ThirdScreen:{
    //  screen:Third
    // },
   
    HomeScreen:Home ,
    SettingScreen: setting,
    ThirdScreen: Third
    },
  {
      initialRouteName:'HomeScreen',
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
    
 },
  
    
);




const App = createAppContainer(AppNavigator);

export default App;