import React, { Component } from 'react';
//import react in our code.
import { Platform, StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';
// import all basic components
import DeviceInfo from 'react-native-device-info';
export default class HappinestabBar extends Component {
  //Screen2 Component
  deviceInfo1=[];
  constructor() {
    super();
    this.state = {
      deviceInfo:[]
    };
  }
  componentDidMount() {
    var deviceInfo1=[];
   // deviceInfo1[0] = 'getAPILevel:  ' + DeviceInfo.getAPILevel();
    deviceInfo1[1] = 'getApplicationName:  ' + DeviceInfo.getApplicationName();
 
    DeviceInfo.getBatteryLevel().then(batteryLevel => {
      deviceInfo1[2] = 'getBatteryLevel:  ' + JSON.stringify(batteryLevel);
      this.setState({deviceInfo : deviceInfo1});
    });
    
    deviceInfo1[3] = 'getBrand:  ' + DeviceInfo.getBrand();
    deviceInfo1[4] = 'getBuildNumber:  ' + DeviceInfo.getBuildNumber();
    deviceInfo1[5] = 'getBundleId:  ' + DeviceInfo.getBundleId();
    deviceInfo1[6] = 'getCarrier:  ' + DeviceInfo.getCarrier();
   // deviceInfo1[7] = 'getDeviceCountry:  ' + DeviceInfo.getDeviceCountry();
    deviceInfo1[8] = 'getDeviceId:  ' + DeviceInfo.getDeviceId();
    //deviceInfo1[9] = 'getDeviceLocale:  ' + DeviceInfo.getDeviceLocale();
    deviceInfo1[10] = 'getDeviceName:  '+ DeviceInfo.getDeviceName();
    deviceInfo1[11] = 'getFirstInstallTime:  '+ DeviceInfo.getFirstInstallTime();
    deviceInfo1[12] = 'getFontScale:  '+ DeviceInfo.getFontScale();
    deviceInfo1[13] = 'getFreeDiskStorage:  '+ DeviceInfo.getFreeDiskStorage();
    
    // DeviceInfo.getIPAddress().then(ip => {
    // deviceInfo1[14] = 'getIPAddress:  '+ JSON.stringify(ip);
    //   this.setState({deviceInfo : deviceInfo1});
    // });
    
    deviceInfo1[15] = 'getInstallReferrer:  '+ DeviceInfo.getInstallReferrer();
   // deviceInfo1[16] = 'getInstanceID:  '+ DeviceInfo.getInstanceID();
    deviceInfo1[17] = 'getLastUpdateTime:  '+ DeviceInfo.getLastUpdateTime();
 
    // DeviceInfo.getMACAddress().then(mac => {
    //   deviceInfo1[18] = 'getMACAddress:  ' + JSON.stringify(mac);
    //   this.setState({deviceInfo : deviceInfo1});
    // });
    
    deviceInfo1[19] = 'getManufacturer:  '+ DeviceInfo.getManufacturer();
    deviceInfo1[20] = 'getMaxMemory:  '+ DeviceInfo.getMaxMemory();
    deviceInfo1[21] = 'getModel:  '+ DeviceInfo.getModel();
    deviceInfo1[22] = 'getPhoneNumber:  '+ DeviceInfo.getPhoneNumber();
    deviceInfo1[23] = 'getReadableVersion:  '+ DeviceInfo.getReadableVersion();
    deviceInfo1[24] = 'getSerialNumber:  '+ DeviceInfo.getSerialNumber();
    deviceInfo1[25] = 'getSystemName:  '+ DeviceInfo.getSystemName();
    deviceInfo1[26] = 'getSystemVersion:  '+ DeviceInfo.getSystemVersion();
  //  deviceInfo1[27] = 'getTimezone:  '+ DeviceInfo.getTimezone();
    deviceInfo1[28] = 'getTotalDiskCapacity:  '+ DeviceInfo.getTotalDiskCapacity();
    deviceInfo1[29] = 'getTotalMemory:  '+ DeviceInfo.getTotalMemory();
  //  deviceInfo1[30] = 'getUniqueID:  '+ DeviceInfo.getUniqueID();
    deviceInfo1[31] = 'getUserAgent:  '+ DeviceInfo.getUserAgent();
    deviceInfo1[32] = 'getVersion:  '+ DeviceInfo.getVersion();
   // deviceInfo1[33] = 'is24Hour:  '+ DeviceInfo.is24Hour();
 
    if(Platform.OS != 'ios'){
      DeviceInfo.isAirPlaneMode().then(airPlaneModeOn => {
        deviceInfo1[34] = 'isAirPlaneMode:  '+ JSON.stringify(airPlaneModeOn);
        this.setState({deviceInfo : deviceInfo1});
      });
    }
    
    deviceInfo1[35] = 'isEmulator:  '+ DeviceInfo.isEmulator();
 
    // DeviceInfo.isPinOrFingerprintSet()(isPinOrFingerprintSet => {
    //     deviceInfo1[36] = 'isPinOrFingerprintSet:  '+ isPinOrFingerprintSet;
    //     this.setState({deviceInfo : deviceInfo1});
    // });
 
    deviceInfo1[37] = 'isTablet:  '+ DeviceInfo.isTablet();
    deviceInfo1[38] = 'hasNotch:  '+ DeviceInfo.hasNotch();
    deviceInfo1[39] = 'isLandscape:  '+ DeviceInfo.isLandscape();
    deviceInfo1[40] = 'getDeviceType:  '+ DeviceInfo.getDeviceType();
 
    //alert('deviceInfo1'+deviceInfo1);
    this.setState({deviceInfo : deviceInfo1});
  }
  render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.MainContainer}>
        {this.state.deviceInfo.map((item, key) => (
          <View key={key} style={styles.item}>
            <Text style={styles.text}>{item}</Text>
            <View style={styles.separator} />
          </View>
        ))}
      </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 30 : 20,
    backgroundColor:'white'
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    width: '90%',
    backgroundColor: '#646464',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#707080',
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
});