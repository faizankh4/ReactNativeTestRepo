import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,ScrollView,Button,TouchableOpacity,TextInput,Image,Alert,FlatList} from 'react-native';

export default class ContactUS extends Component
{
   
    pressAlert()
    {
      Alert.alert('press')

    }
  
    sendMailMethod ()
    {
      this.sendMail();
    }
  
    async sendMail() {
      try {
        await MailCompose.send({
         // toRecipients: ['to1@example.com', 'to2@example.com'],
        //  ccRecipients: ['cc1@example.com', 'cc2@example.com'],
         // bccRecipients: ['bcc1@example.com', 'bcc2@example.com'],
         
         toRecipients: ['sales@dafz.ae'],
    
         subject: 'DAFZ Sales Dept',
        // text: 'This is body',
        // html: '<p>This is <b>html</b> body</p>', // Or, use this if you want html body. Note that some Android mail clients / devices don't support this properly.
        // body:subjectBody,
        //  attachments: [{
        //    filename: 'mytext', // [Optional] If not provided, UUID will be generated.
        //    ext: '.txt',
        //    mimeType: 'text/plain',
        //    text: 'Hello my friend', // Use this if the data is in UTF8 text.
        //    data: '...BASE64_ENCODED_STRING...', // Or, use this if the data is not in plain text.
        //  }],
        });
      } catch (e) {
        // e.code may be 'cannotSendMail' || 'cancelled' || 'saved' || 'failed'
       // Alert.alert('Failure',"Your device doesn't support the composer sheet");
     
      }
    }
     
 
    render()
    {
       return(
         <View style = {{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'stretch', backgroundColor:'rgba(15, 48, 72, 1.0)'}}
          >
        <View style = {{flexDirection:'row',backgroundColor:'transparent',height:100,marginTop:2,justifyContent:'flex-start'}}>  
        <View style = {{backgroundColor:'transparent',flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'stretch',paddingLeft:10}}> 
        <Text
         style = {{color:'white',fontWeight:'bold',fontSize:14,marginTop:5}}
        >Contact Information</Text>
        <Text
         style = {{color:'white',fontWeight:'normal',fontSize:14,marginTop:5}}
        >Dubai Airport Freezone</Text>
        <Text
         style = {{color:'white',fontWeight:'normal',fontSize:14}}
        >PO Box 491 Dubai, UAE</Text>
        <Text
         style = {{color:'white',fontWeight:'normal',fontSize:14,}}
        >Tel: +971 4 299 5555</Text>
         <Text
         style = {{color:'white',fontWeight:'normal',fontSize:14,}}
        >Fax: +971 4 299 5500</Text>

        </View> 

       
       

        <TouchableOpacity onPress={this.pressAlert.bind(this)}
                           style = {{alignSelf:'center',width:40,alignItems:'center'}}
        >
            {/*Donute Button Image */}
            <Image source={require('./../../images/ContactUS/contact_yellow.png')} 
             style={{width:25,height:25}}>
          </Image>
          </TouchableOpacity>
       
        
       
       </View>    
       
       <View style = {{flexDirection:'row',backgroundColor:'transparent',height:100,marginTop:2,justifyContent:'flex-start'}}>  
        <View style = {{backgroundColor:'transparent',flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'stretch',paddingLeft:10}}> 
        <Text
         style = {{color:'white',fontWeight:'bold',fontSize:14,marginTop:5}}
        >Sales Dept</Text>
        <Text
         style = {{color:'white',fontWeight:'normal',fontSize:14,marginTop:5}}
        >Phone: +971 4 202 7000</Text>
        <Text
         style = {{color:'white',fontWeight:'normal',fontSize:14}}
        >FAX: +971 4 202 7766</Text>
        <View style = {{flexDirection:'row'}}>
        <Text
         style = {{color:'white',fontWeight:'normal',fontSize:14,}}
        >Email :</Text>
        <TouchableOpacity onPress={this.sendMailMethod.bind(this)}
                          
        >
          
          <Text
         style = {{color:'yellow',fontWeight:'normal',fontSize:14,}}
        >sales@dafza.ae</Text>  
        </TouchableOpacity>
        
        </View>  
        
        
       
        

         

        </View> 

       
       

        <TouchableOpacity onPress={this.pressAlert.bind(this)}
                           style = {{alignSelf:'center',width:40,alignItems:'center'}}
        >
            {/*Donute Button Image */}
            <Image source={require('./../../images/ContactUS/contact_yellow.png')} 
             style={{width:25,height:25}}>
          </Image>
          </TouchableOpacity>
       
        
       
       </View>    

       <View style = {{flexDirection:'row',backgroundColor:'transparent',height:100,marginTop:2,justifyContent:'flex-start'}}>  
        <View style = {{backgroundColor:'transparent',flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'stretch',paddingLeft:10}}> 
        <Text
         style = {{color:'white',fontWeight:'bold',fontSize:14,marginTop:5}}
        >Call Centre</Text>
        <Text
         style = {{color:'white',fontWeight:'normal',fontSize:14,marginTop:5}}
        >Please call us 24/7 on</Text>
        <Text
         style = {{color:'white',fontWeight:'normal',fontSize:14}}
        >6005 60000</Text>

        </View> 

       
       

        <TouchableOpacity onPress={this.pressAlert.bind(this)}
                           style = {{alignSelf:'center',width:40,alignItems:'center'}}
        >
            {/*Donute Button Image */}
            <Image source={require('./../../images/ContactUS/contact_yellow.png')} 
             style={{width:25,height:25}}>
          </Image>
          </TouchableOpacity>
       
        
       
       </View>    
       
       <View style = {{flexDirection:'row',backgroundColor:'transparent',height:100,marginTop:2,justifyContent:'space-evenly',alignItems:'center'}}> 
       <TouchableOpacity onPress={this.pressAlert.bind(this)}
                          
        >
           
            <Image source={require('./../../images/ContactUS/fbwhite.png')} 
             style={{width:30,height:30,resizeMode:'contain'}}>
          </Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.pressAlert.bind(this)}
                          
        >
           
            <Image source={require('./../../images/ContactUS/instagram.png')} 
             style={{width:30,height:30,resizeMode:'contain'}}>
          </Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.pressAlert.bind(this)}
                          
        >
           
            <Image source={require('./../../images/ContactUS/twitterWhite.png')} 
             style={{width:30,height:30,resizeMode:'contain'}}>
          </Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.pressAlert.bind(this)}
                          
        >
           
            <Image source={require('./../../images/ContactUS/youtube.png')} 
             style={{width:30,height:30,resizeMode:'contain'}}>
          </Image>
          </TouchableOpacity>
      
      
       </View>
       
       
       
       </View>
         
             

       );
    
    }

}
