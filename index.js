/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import AppRouter from './AppRouter'
import AppRedux from './ReactNavigationRedux/AppRedux'
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import configureStore from './store'
const store = configureStore()
const RNRedux = () => (
 <Provider store = {store}> 
 <AppRouter/>
 </Provider>      
)

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => RNRedux);
 //AppRegistry.registerComponent(appName, () => AppRedux);
