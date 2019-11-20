import React, { Component } from 'react';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Counter from './Counter'
import StaticCounter from './StaticCounter'
import { Button, Text, View, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import SplashScreen from 'react-native-splash-screen';
// Connect the screens to Redux

let CounterContainer = connect(state => ({ count1: state.count1,value:'test' }))(Counter);
let StaticCounterContainer = connect(state => ({ count1: state.count1,value:'test2'}))(
  StaticCounter
);

// Create our stack navigator
let RootStack = createStackNavigator({
    Counter: CounterContainer,
    StaticCounter: StaticCounterContainer,
  });

  let Navigation = createAppContainer(RootStack);

// A very simple reducer
function counter(state, action) {
    if (typeof state === 'undefined') {
      return 0;
    }
  
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }
  
  // A very simple store
  let store = createStore(combineReducers({ count1: counter }));
  //let store = createStore(combineReducers());
 
 
 
  export default class App extends React.Component {
    componentDidMount (){
      SplashScreen.hide();
     }
    
    
    render() {
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      );
    }
  }
