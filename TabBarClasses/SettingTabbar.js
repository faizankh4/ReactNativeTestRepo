import React from 'react';
import { Button, Text, View } from 'react-native';
class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Detail')}
          />
           <Button
            title="Go to WebView"
            onPress={() => this.props.navigation.navigate('WebviewScreen')}
          />
        </View>
      );
    }
  }

  export default(SettingsScreen)