import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,ScrollView,Button,TouchableOpacity,TextInput,Image,Alert,FlatList} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import renderif from './../renderif'
import MailCompose from 'react-native-mail-compose';
// import all basic components
 
 let textStr = 'Fields with(*) mandatory fields Kindly note that the forms must be filled in English';
 const category_array = ['License','Lease','Sales','IT','Activity','Administration','DGS Office','Engineering','Finance','Human Capital','Marketing','Visas','Security & Logistics']; 
  var subjectBody = '';

 export default class Enquiry extends Component {
  //Screen2 Component
  constructor(){
    super()
   this.state = {
     firstVar:'',
     ListItem:[
     {name:'Name',id:1,refText:'Name'},
     {name:'Company',id:2,refText:'Company'},
     {name:'Category',id:3,refText:'categoryTextValue'},
     {name:'Tel/Mobile',id:4,refText:'Mobile'},
     {name:'Fax',id:5,refText:'Fax'},
     {name:'Country',id:6,refText:'Country'},
     {name:'E-Mail',id:7,refText:'Email'},
     {name:'Subject',id:8,refText:'Subject'},
     {name:'message',id:19,refText:'message'},

     ],
     showSubView:false,
     categoryTextValue:null,
     Name:'',
     Company:'',
     Category:'',
     Mobile:'',
     Fax:'',
     Country:'',
     Email:'',
     Subject:'',
     message:'',
     rerenderView:true,
 }


 }
 
 _onChangetetx = (key,value) =>
 {
   this.setState({[key]:value});
 }
 
 
 clearAllField()
 {
   this.setState({Name:'',Company:'',Category:'',Mobile:'',Fax:'',Country:'',Email:'',Subject:'',message:'',categoryTextValue:''})
 }
 
 
 
 submitButton = () =>
  {

   var name = this.refs.Name._lastNativeText;
   var company = this.refs.Company._lastNativeText; 
   var category = this.state.categoryTextValue;
   var Mobile =  this.refs.Mobile._lastNativeText;
   var fax =  this.refs.Fax._lastNativeText;
   var Country =  this.refs.Country._lastNativeText;
   var Email =  this.refs.Email._lastNativeText;
   var Subject = this.refs.Subject._lastNativeText;
   var message = this.refs.message._lastNativeText;

   if (name && Mobile && Email && Subject)
   {
   
   if (name.length === 0 || Mobile.length === 0 || Email.length === 0 || Subject.length === 0)
   {
    Alert.alert('Alert','Mandatory Field is Empty') ;
   
   }
  else{
   // Alert.alert('Alert','Mandatory Field is Empty') ; 
     if(this.validateEmail(Email))
     {

      subjectBody = 'Sub :' + Subject +  '\n\n' + 'Name :- ' + name + ' \n ' + 'Company name :- ' + company + ' \n Country :- ' + Country + '\n Mobile:- ' + Mobile + ' \n category :-' + category + ' \n Email -: ' + Email + ' \n\n Comments -:' + message;
       //git Alert.alert(subjectBody); 
      this.sendMail()
   
    }
    else{
    //  Alert.alert('email is Invalid'); 
  
    //  this.sendMail()
    }
  
    } 
  
}
  else{
    Alert.alert('Alert','Mandatory Field is Empty') ;
  }
  // Alert.alert(name + company + category  + fax + Country  + Subject + message + Mobile +  Email) ;
  
  // this.setState({rerenderView:true})

 }
 
 
 validateEmail = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if(reg.test(text) === false)
  {
  console.log("Email is Not Correct");
  
  return false;
    }
  else {
    
    console.log("Email is Correct");
     return true;
  }
  
}
 
async sendMail() {
  try {
    await MailCompose.send({
     // toRecipients: ['to1@example.com', 'to2@example.com'],
    //  ccRecipients: ['cc1@example.com', 'cc2@example.com'],
     // bccRecipients: ['bcc1@example.com', 'bcc2@example.com'],
     
     toRecipients: ['customercare@dafz.ae'],

     subject: 'This is subject',
    // text: 'This is body',
    // html: '<p>This is <b>html</b> body</p>', // Or, use this if you want html body. Note that some Android mail clients / devices don't support this properly.
     body:subjectBody,
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
 


popoverOpenClass = () =>
   {

    //  Alert.alert('popover button press')
       this.setState({showSubView:!this.state.showSubView});
   
    }
 
    removeSubView = (Item) =>
    {
     
      if (Item)
      {
        this.setState({showSubView:false,categoryTextValue:Item})
      }
      else{
        // Alert.alert('call');
         this.setState({showSubView:false})
    }
    }
 
 
   removefromsuperView()
   {
    

   }
   
   
    renderSeparator = () => {  
      return (  
          <View  
              style={{  
                  height: 1,  
                  width: "100%",  
                  backgroundColor: "darkgray", 
                  marginLeft:'0%',
              }}  
          > 
          </View> 
      );  
  };  
   
   
   
    renderScrollviewItem = (item,index) =>
   {
    
     if (index === 8)
     {
      return(
        <View style = {{margin:5,
          padding:10,
          height:80,
         // borderColor:'grey',
         // borderWidth:1,
          backgroundColor:'',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'flex-start',
          }}
         
          >
        
        <Text style = {{color:'white',fontSize:12,fontWeight:'500',width:55,}}>
        {item.name}
        </Text>
        <Text style = {{flex:0.1,color:'white'}}>
          *
         </Text>
        <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5,height:75}]} 
              underlineColorAndroid = 'transparent'
              placeholder = ''
              placeholderTextColor = '#9a73ef'
              autoCapitalize = 'none'
              onChangeText = {(emailvalue) => this._onChangetetx(item.refText,emailvalue)}
              multiline = {true}
              autoCorrect = {false}
              ref = {item.refText}
              value = {this.state.message}
              
         />
      
      
      </View> 

      )


     }
     else if (index === 2)
     {
      return(
       <View style = {{flexDirection:'column',backgroundColor:'rgba(15, 48, 72, 1.0)',alignItems:'center',opacity:1.0}}
       
       >
       
        <View style = {{margin:5,
          padding:10,
          height:35,
         // borderColor:'grey',
         // borderWidth:1,
          backgroundColor:'',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'flex-start',
          }}
        
          >
        
        <Text style = {{color:'white',fontSize:12,fontWeight:'500',width:55,}}>
        {item.name}
        </Text>
        <Text style = {{flex:0.1,color:'white'}}>
          *
       
         </Text>
         <TouchableOpacity style = {{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5,height:25,flexDirection:'row',alignItems:'center'}}
                           onPress = {() => this.popoverOpenClass()} 
         >
        <Text style = {{backgroundColor:'',height:25,flex:1,marginLeft:5,marginTop:10}} 
         
        >
       {this.state.categoryTextValue}
       
        </Text>
       
        <Image style = {{width:15,height:15,resizeMode:'contain'}}
               source = {require('./../../images/drop_down.png')}
        >
       
        </Image>
        </TouchableOpacity>
     
      </View> 
      {renderif(this.state.showSubView)(
        <View style = {styles.inputContainer}>
      <FlatList                                                  
     data = {category_array}
     renderItem = {({item}) => <View style={{backgroundColor:'',marginBottom:0,height:44,flexDirection:'row'}}
     ItemSeparatorComponent = {this.renderSeparator}
     >
     
     
     <View style = {{flex:1,backgroundColor:''}}>
     <TouchableOpacity  onPress = {() => this.removeSubView(item)}
                        style  = {{backgroundColor:'',flex:1,justifyContent:'center',alignItems:'flex-start'}} 
     >                
     <Text style = {{marginLeft:5,textTransform:'uppercase',fontSize:10,fontWeight:'500',color:'black'}}>{item}</Text>
     </TouchableOpacity>
    </View>
    
     </View>
     }                         

     
    ItemSeparatorComponent = {this.renderSeparator}
    keyExtractor = {item => item.key}
    horizontal={false}>
    </FlatList>                
        
        
        </View> 
     )}
      
     
     
      </View>
     
      )
     
    
     }
     if(index === 3 || index === 4 )
     {
      return(
        <View style = {{margin:5,
          padding:10,
          height:35,
         // borderColor:'grey',
         // borderWidth:1,
          backgroundColor:'',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'flex-start',
          }}
          
          >
        
        <Text style = {{color:'white',fontSize:12,fontWeight:'500',width:55,}}>
        {item.name}
        </Text>
        <Text style = {{flex:0.1,color:'white'}}>
          *
         </Text>
         {renderif(index === 3)(
        <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5}]} 
              underlineColorAndroid = 'transparent'
              placeholder = ''
              placeholderTextColor = '#9a73ef'
              autoCapitalize = 'none'
              onChangeText = {(emailvalue) => this._onChangetetx(item.refText,emailvalue)}
              keyboardType = {"number-pad"}
              ref = {item.refText}
              autoCorrect = {false}
              value = {this.state.Mobile}
             
        />
         )
         }
        {renderif(index === 4)(
        <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5}]} 
              underlineColorAndroid = 'transparent'
              placeholder = ''
              placeholderTextColor = '#9a73ef'
              autoCapitalize = 'none'
              onChangeText = {(emailvalue) => this._onChangetetx(item.refText,emailvalue)}
              keyboardType = {"number-pad"}
              ref = {item.refText}
              autoCorrect = {false}
              value = {this.state.Fax}
             
        />
         )
         }
     
     
      </View> 

      )
      
   
   
    } 
    else if (index === 6)
    {

      return(
        <View style = {{margin:5,
          padding:10,
          height:35,
         // borderColor:'grey',
         // borderWidth:1,
          backgroundColor:'',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'flex-start',
          }}
          
          >
        
        <Text style = {{color:'white',fontSize:12,fontWeight:'500',width:55,}}>
        {item.name}
        </Text>
        <Text style = {{flex:0.1,color:'white'}}>
          *
         </Text>
        <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5}]} 
              underlineColorAndroid = 'transparent'
              placeholder = ''
              placeholderTextColor = '#9a73ef'
              autoCapitalize = 'none'
              onChangeText = {(emailvalue) => this._onChangetetx(item.refText,emailvalue)}
              ref = {item.refText}
              autoCorrect = {false}
              value = {this.state.Email}
             
        />
      
      
      </View> 

      )
    
    
    
    
    }
    else{
    return(
        <View style = {{margin:5,
          padding:10,
          height:35,
         // borderColor:'grey',
         // borderWidth:1,
          backgroundColor:'',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'flex-start',
          }}
          
          >
        
        <Text style = {{color:'white',fontSize:12,fontWeight:'500',width:55,}}>
        {item.name}
        </Text>
        <Text style = {{flex:0.1,color:'white'}}>
          *
         </Text>
         {renderif(index === 0)(
        <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5}]} 
              underlineColorAndroid = 'transparent'
              placeholder = ''
              placeholderTextColor = '#9a73ef'
              autoCapitalize = 'none'
              onChangeText = {(emailvalue) => this._onChangetetx(item.refText,emailvalue)}
              ref = {item.refText}
              autoCorrect = {false}
              value = {this.state.Name}
             
        />
         )
         }
          {renderif(index === 1)(
        <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5}]} 
              underlineColorAndroid = 'transparent'
              placeholder = ''
              placeholderTextColor = '#9a73ef'
              autoCapitalize = 'none'
              onChangeText = {(emailvalue) => this._onChangetetx(item.refText,emailvalue)}
              ref = {item.refText}
              autoCorrect = {false}
              value = {this.state.Company}
             
        />
         )
         }
           {renderif(index === 5)(
        <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5}]} 
              underlineColorAndroid = 'transparent'
              placeholder = ''
              placeholderTextColor = '#9a73ef'
              autoCapitalize = 'none'
              onChangeText = {(emailvalue) => this._onChangetetx(item.refText,emailvalue)}
              ref = {item.refText}
              autoCorrect = {false}
              value = {this.state.Country}
             
        />
         )
         }
          {renderif(index === 7)(
        <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5}]} 
              underlineColorAndroid = 'transparent'
              placeholder = ''
              placeholderTextColor = '#9a73ef'
              autoCapitalize = 'none'
              onChangeText = {(emailvalue) => this._onChangetetx(item.refText,emailvalue)}
              ref = {item.refText}
              autoCorrect = {false}
              value = {this.state.Subject}
             
        />
         )
         }
     
     
      </View> 

      )
        }
   }
 
   handelEmail = (text) => {
    this.setState({email:text})
}
 
 
   makeList = (item) =>
   (
   
   
   
   
    <View style = {{margin:5,
        padding:10,
        height:35,
       // borderColor:'grey',
       // borderWidth:1,
        backgroundColor:'',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        }}>
      
      <Text style = {{color:'white',fontSize:12,fontWeight:'500',width:55,}}>
      {item.name}
      </Text>
      <Text style = {{flex:0.1,color:'white'}}>
        *
       </Text>
      <TextInput style = {[styles.input,{flex:0.9,backgroundColor:'white',marginLeft:10,borderRadius:5}]} 
            underlineColorAndroid = 'transparent'
            placeholder = ''
            placeholderTextColor = '#9a73ef'
            autoCapitalize = 'none'
            onChangeText = {(emailvalue) => this.handelEmail(emailvalue)}
       />
    
    
    </View>

   
   );
 
 
 
 
   render() {
   
   // if(this.state.rerenderView)
  
    return (
       <View style={styles.MainContainer}
        //  onStartShouldSetResponder={() => this.removefromsuperView()}
        onStartShouldSetResponder ={() => this.removeSubView()}
      >
       
     <KeyboardAwareScrollView
     style={{ backgroundColor: 'rgba(15, 48, 72, 1.0)' }}
       resetScrollToCoords={{ x: 0, y: 0 }}
       contentContainerStyle={styles.MainContainer}
     scrollEnabled={false}
   
      >
      
        {/* <ScrollView style = {{flex:1, backgroundColor:''}}>
         {this.state.ListItem.map(this.makeList)}
       
        </ScrollView> */}

            <ScrollView>
               {
                  this.state.ListItem.map((item, index) => (
                    
                     this.renderScrollviewItem(item,index)
                    ))
               }
            </ScrollView>
        <View style = {{height:80,backgroundColor:'rgba(15, 48, 72, 1.0)'}}>
        <Text style = {{fontSize:10,color:'white',margin:10}}>
        {textStr}
        </Text> 
        <View style = {{flexDirection:'row',justifyContent:'space-around',alignItems:'center',
        backgroundColor:'',flex:1}}>

      
        <TouchableOpacity style = {{backgroundColor:'white',borderRadius:5,width:70,height:25,alignItems:'center',justifyContent:'center'}} 
        onPress={() => this.clearAllField()}>
            
            <Text style = {{color:'rgba(15, 48, 72, 1.0)',fontSize:12,fontWeight:'500'}}>
             Cancel
            </Text>    
          </TouchableOpacity>

          <TouchableOpacity onPress={this.submitButton.bind(this)}
                            style = {{backgroundColor:'white',borderRadius:5,width:70,height:25,alignItems:'center',justifyContent:'center'}}
          >
            
            <Text style = {{color:'rgba(15, 48, 72, 1.0)',fontSize:12,fontWeight:'500'}}>
             Submit
            </Text>    
          </TouchableOpacity>
       
    
       
        </View>    
       
       
       
       </View>
       
       </KeyboardAwareScrollView>
       
         </View> 
    );
             
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  //  paddingTop: 20,
   // alignItems: 'center',
  //  marginTop: 50,
    //justifyContent: 'center',
    backgroundColor:'rgba(15, 48, 72, 1.0)',
      
},input:{
   // margin:15,
    height:25,
   // borderColor:'grey',
   // borderWidth:1, 
 },
 item: {

  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 30,
  margin: 2,
  borderColor: '#2a4944',
  borderWidth: 1,
  backgroundColor: '#d2f7f1'
},
inputContainer:{
  width:180,
  height:150,
  backgroundColor:'white',
  marginLeft:80,
  marginTop:-5,
  borderColor:'black',
  borderWidth:5,
  borderRadius: 2,

}

});