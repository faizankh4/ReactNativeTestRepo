import React, { Component } from 'react';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Feed from './Feed'
import ItemDetail from './ItemDetail'

export const Navigator = createStackNavigator({
    Feed: { screen: Feed },
    ItemDetail: { screen: ItemDetail },
  },{
    initialRouteName: 'Feed',
  })
class Nav extends Component {
   render(){
       return(
           <Navigator/>
       )
   }

}

export default Nav