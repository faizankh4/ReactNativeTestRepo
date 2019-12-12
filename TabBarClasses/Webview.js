import React, { Component } from 'react';
import { View, Text, Button,StyleSheet,Picker,StatusBar,WebView} from 'react-native';


export class webviewClass extends Component {
  
     state = {
         lamguage:'',
     }
  
     updateUser = (value) =>
     {
       this.setState({user:value})

     }
   
     render()
    {
       return (
        <View style={styles.container}>  
         <WebView
         // originWhitelist={['*']}
         source={{html: `<p>​</p><p style="text-align&#58;center !important;">
         <strong>Pioneering New Islamic Economy Products Launched in Dubai </strong></p><p style="text-align&#58;center !important;"><strong></strong>&#160;</p><ul><li style="text-align&#58;center !important;">
            <em>Announcement on new solutions made at '3</em><em><sup>rd</sup></em><em> Session&#58; International Innovative Platform of Islamic Economy Products' helping to support Dubai's position as Capital of Islamic Economy</em></li></ul><p>
         <em>&#160;</em></p><p style="text-align&#58;justify;">Three new and unique solutions were launched in Dubai today at the 3<sup>rd</sup> Session&#58; International Innovative Platform for Islamic Economy Products (IIPIEP 2018). The event, which was organized by Dubai Airport Freezone Authority (DAFZA) in cooperation with International Center of Islamic Economy (ICIE), helps to establish Dubai's leading position as the capital of Islamic Economy across the globe. </p><p style="text-align&#58;justify;">The first product launched was the 'Exchangeable Sukuk', which has been created to mobilize resources using Sukuk that are tradable and don't require the utilization of bank assets. Other specific properties for the Sukuk include obtaining high credit card ratings and allowing for additional returns to economize on the costs of the structure. The Sukuk was developed by a team of experts at the Islamic Development Bank in collaboration with international investment banks. It was also approved by the Shar'iah Committee of the Islamic Development Bank and cleared by several technical committees.</p><p style="text-align&#58;justify;">The second product announced was the 'Awqaf Fund' which aims to create a new simple sustainable product for anyone who wants to put their money into 'waqf' - an endowment made to a religious, educational or charitable cause. The 'Awqaf Fund' will be combined with a number of diverse financial risk products allowing greater control over assets in order to achieve better returns on capital. </p><p style="text-align&#58;justify;">The 'Flexible Credit Card' was the third product launched at IIPIEP 2018, which seeks to combine investment with funding, whereby the customer gets balance in credit and at the same time an investment account. This product falls under Sharia compliance for both investments and funding. &#160;</p><p style="text-align&#58;justify;">Commenting on the event, Nasser Al Madani, Assistant Director General at DAFZA highlighted the key role that IIPIEP 2018 plays in supporting the growth of the national economy and specifically Islamic Economy. He explained that&#58; &quot;IIPIEP provides the ideal platform for innovative Islamic Economy products, services, and mechanisms that support the development of the sector and increases public trust and awareness in Islamic banking.&quot; </p><p style="text-align&#58;justify;">Al Madani also commented that &quot;IIPIEP supports the three main pillars of DAFZA's strategy for Islamic economy, which is based on detailed and insightful market studies and research. The strategy aims to attract direct foreign investments and new investment opportunities. In order to realize these objectives, the market must have a well-established legal and procedural system, as well as developed services that foster trust amongst investors.&quot;</p><p>Abdullah Mohammed Al Awar, Chief Executive Officer of the Dubai Islamic Economy Development Centre, said&#58; &quot;It is important that we witness innovation of this type as it sets a great precedent within Islamic economy. These innovations have helped us create products that are focused on achieving important goals, such as sustainability, growth and economic and social fairness. These solutions mark a qualitative shift in the functionality of investment and reflect the essence of culture within Islamic economy, which shifts the balance from elite to social.&quot;</p><p>Sultan Al Howymel, CEO of the International Center of Islamic Economy commented&#58; &quot;This global platform is dedicated to establishing a culture of innovation and an integrated approach to the advancement of the Islamic economic system. They key aim is to achieve a sustainable economy.&quot;</p><p>Al Howymel also commented on the importance of cooperation with DAFZA and the strategic partners to create an interactive platform that bridges the gap between decision-makers, government officials and economic and financial establishments. He highlighted that the collaboration also helps set up a specific mechanism to motivate innovators in the global economy to cope with rapid changes, stressing the Center's determination to continue efforts to promote leadership in the development of initiatives and applications of the global Islamic economy.</p><p style="text-align&#58;justify;">Mohammed Qasim Al Ali, CEO of National Bonds added&#58; &quot;National Bonds is proud to sponsor the International Innovative Platform for Islamic Economy Products. The race for innovation is competitive and we are trying to be at the forefront by creating new and innovative tools that will help us secure the financial future of our societies. For us to be successful, we must take an innovative approach to development and overcome any obstacles to achieve our objective.&quot; </p><p style="text-align&#58;justify;">Abdulrazzak Mohammed Al Khraijy, Head of Shar'iah Group of National Commercial Bank, said&#58; &quot;We are proud of our partnerships with a number of key of institutions, companies and banks that are working to develop the Islamic economy. Our participation in this platform is part of the Bank's strategy to support and promote events and activities at local, regional and global level. This will contribute to the development of the Islamic Economic industry which has proved to the world its effectiveness in terms of objectivity and productivity.&quot; </p><p style="text-align&#58;justify;">Held at Grand Hyatt Dubai, the event was attended by industry experts, innovators, and decision-makers. It was supported by Alinma Bank, Islamic Development Bank and Dubai Islamic Economy Development Centre, sponsored by National Bonds and National Commercial Bank. The 1<sup>st</sup> Session of IIPIEP was launched in 2015, and aims to encourage innovation and creativity in developing new products and services that are compliant with Islamic Shar'iah principles.</p>`}}
        
         style={{ marginTop: 20 ,backgroundColor:'red'}}
      
      />   
        
        <Text>test</Text>
        {/* <Text style={styles.textStyle}>PickerExample</Text>  
        <Picker style={styles.pickerStyle}  
                selectedValue={this.state.lamguage}  
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }>
                 
                
                   
             
            <Picker.Item label="Java" value="java" />  
            <Picker.Item label="JavaScript" value="js" />  
            <Picker.Item label="React Native" value="rn" />  
        </Picker>  
        <Text style={styles.textStyle}> {"Index ="+this.state.language}</Text>   */}
         <StatusBar  
                    backgroundColor = "#b3e6ff"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
   
    </View>  
      
        )

    }
}




export default webviewClass;

const styles = StyleSheet.create(
{
   container:{
       flex:1,
      // justifyContent:'center',
      // alignItems:'center',
   },
textStyle:{
 margin:25,
 fontSize:25,
 fontWeight:'bold',
 textAlign:'center'
},
pickerStyle:{
    height:150,
    width:'180%',
    color:'#344953',
    justifyContent: 'center',

},

}
)