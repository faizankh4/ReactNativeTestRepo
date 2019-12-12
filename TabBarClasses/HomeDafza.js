import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text ,Button,Platform,Image,Alert,FlatList,Dimensions,ActivityIndicator,TouchableOpacity,WebView} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import moment from 'moment';

// import all basic components
 
class LogoTitle extends React.Component {
    render() {

    //   return (
    //     <Image
    //       source={require('./../images/blueDot.png')}
    //       style={{ width: 30, height: 30 }}
    //     />
    //   );
   
    return (
        <View style = {{backgroundColor:'red'}}>
          <SegmentedControlTab
            values={["First", "Second", "Third"]}
            selectedIndex={0}
            onTabPress={this.handleIndexChange}
           
          />
        </View>
      );
   }
  }

   const arrimage = [{imagekey:'http://qc-test.dafz.ae/smartservicessuite/imgs/HeadOffice2.jpg',labelTetx:'World’s Fastest Growing Free Zone alongside Global Aviation Partners'},
                    {imagekey:'http://qc-test.dafz.ae/smartservicessuite/imgs/dafz-3.jpg',labelTetx:'World Leading Auto Manufacturer ( Toyota sets up regional office in Dubai )'},
                    {imagekey:'http://qc-test.dafz.ae/smartservicessuite/imgs/dafz-1.jpg',labelTetx:'Dubai Airport Freezone sustains strong economic ties between UAE and South Korea'}
                    ];

   const screenWidth = Math.round(Dimensions.get('window').width);
   const screenHeight = Math.round(Dimensions.get('window').height);
 
   export default class HomeDafza extends Component {
    
     constructor (props)
     {
       super(props)  
       this.state = {
        selectedIndex :0,
        selectTabSecond:false,
        showIndicator:true,
        refreshing:false,
        loading:false,
        titlearray:[],
        NewsDatearray:[],
        IDArray:[],
        PublishingPageContentArray:[],
        xmlString:{},
        showwebview:false,
        selectedDict:{},
     
      };
     }
    
    
  //  componentDidMount() {
   //  this.setState({showIndicator:true}) 
   //  this.makeRemoteRequest();
    
   
//}
componentDidMount()
{

  this.props.navigation.setParams({handelExchaneMethod:this.testMethod,selecttabIndex:this.state.selectedIndex})
  this.setState({showIndicator:true}) 
   this.makeRemoteRequest();


}  



makeRemoteRequest = () =>
   {
      const url = "https://www.dafz.ae/en/MediaCenter/News/_api/web/Lists/getbytitle('Pages')/items?$orderby=NewsDate%20asc&$select=Id,Title,FileRef,NewsDate,PublishingPageContent&$filter=startswith(ContentTypeId,%270x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF3900242457EFB8B24247815D688C526CD44D00E8FD27B096270243BD%27)";
       this.setState({loading:true})
       fetch(url)
      .then(res => res.text())
      .then(res =>{
       
        var XMLParser = require('react-xml-parser');
        var xml = new XMLParser().parseFromString(res);
     
      //  console.log(xml.getElementsByTagName('d:Title'));
       
        var  titlearraylocal =  xml.getElementsByTagName('d:Title');
        var  idarraylocal =  xml.getElementsByTagName('d:Id');
        var  NewsDatearraylocal =  xml.getElementsByTagName('d:NewsDate');
        var  PublishingPageContentlocal =  xml.getElementsByTagName('d:PublishingPageContent');

        var reversetitleLocal = [];
        var NewsDataArrayreverse = [];
        var publishPagereverse = [];
        var arraylenght = titlearraylocal.length;

        for(var i = (arraylenght-1); i>=0; i--)
         {
              var dict = titlearraylocal[i];
              reversetitleLocal.push(dict);

         }
        for(var i = NewsDatearraylocal.length-1 ; i>=0; i--)
        {
             let dict = NewsDatearraylocal[i];
             NewsDataArrayreverse.push(dict);

        
        
         }
       
       for(var i = PublishingPageContentlocal.length-1; i>=0;i--)
       {
       
        publishPagereverse.push(PublishingPageContentlocal[i]);
     
       }
      
      var dict  = publishPagereverse[0];
      console.log(dict.value);
      
      
       //  firstdict = titlearray[0];
        // console.log(firstdict.value);
        // var title = new get
       
        //  console.log(xml);
       
       
        this.setState({
          xmlString:xml,data:xml.children,error:res.error || null, loading:false,refreshing:false,showIndicator:false,titlearray:reversetitleLocal,
          IDArray:idarraylocal,NewsDatearray:NewsDataArrayreverse,PublishingPageContentArray:publishPagereverse
        
         });
      
         
      
       //  console.log(this.state.data);
     
        })
      .catch(error =>{
         this.setState({error:error,loading:false})
      });
  
  
  
    }
    
    
    static navigationOptions = ({navigation}) => {
       
      const params = navigation.state.params || {};
      return {
       //  title:'Home',
      //  headerRight:<LogoTitle/>
        headerRight:(
        <SegmentedControlTab
          values={["EN", "ع"]}
          selectedIndex={params.selecttabIndex}
          onTabPress={params.handelExchaneMethod}
          tabsContainerStyle = {styles.tabsContainer}
          tabStyle = {styles.tabStyle}
          firstTabStyle = {styles.firstTabStyle}
          activeTabStyle = {styles.activeTabStyle}
          activeTabTextStyle = {styles.activeTabTextStyle}
          tabTextStyle = {styles.tabTextStyle}
         
        />
      )
       
          
       
      }
      
     };

   
   
 
   testMethod = ()=>
   {
     if(!this.state.selectTabSecond)
     {
      this.props.navigation.setParams({selecttabIndex:1})
     }
    else{
      this.props.navigation.setParams({selecttabIndex:0})
    }
     this.setState({selectTabSecond:this.state.selectTabSecond === false ? true: false });
   
    Alert.alert('testMethod')
  
   }
   
    handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  // Alert.alert('call')
 
  };
   
   _renderItem = (item,index) =>
   {
      return (
        <View style = {{
          //  flex:0.5,
            flexDirection:'column',
            alignItems:'flex-start',
            justifyContent:'flex-start',
           // width:'100%',
            width:(screenWidth-0),
          //  height:100,
          //  borderWidth:1,
          //  margin : 5,
           // borderRadius:10,
            borderColor:'grey',
            backgroundColor:''
        }}>
         <Image
           style={{height:210,width:(screenWidth-10),backgroundColor:'yellow',flex:0.8,margin:5}}
           source = {{uri:item.imagekey}}
         > 
         
         </Image>

       <Text style = {{flex:0.2,fontSize:12,fontWeight:'500',fontStyle:'normal',color:'white',marginLeft:5,marginTop:5}}>{item.labelTetx}</Text>  
       </View> 
      );
  
  
   }
   
   openWebView = (item,index) =>
   {
    var dict = this.state.PublishingPageContentArray[index];
    
     this.setState({showwebview:true,selectedDict:dict});
      
   
   
    }
   
   
   _renderItemsecondList = (item,index) =>
   {
     
    var dictNewsDate = this.state.NewsDatearray[index];
    moment.locale('en');
     var dt = dictNewsDate.value;
    var formatteddate = moment(dt).format('DD-MM-YYYY');
    
    return (
        <View style = {{
            flex:1.0,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'flex-start',
           // width:'100%',
            //width:(screenWidth-2),
              height:50,
          //  borderWidth:1,
          //  margin : 5,
           // borderRadius:10,
            borderColor:'grey',
            backgroundColor:'',
            margin:1,
       }}>
         <Image
           style={{height:30,width:30,margin:0}}
           source = {require('./../images/right.png')}
         > 
         
         </Image>  
         <View style = {{flex:1,backgroundColor:'',paddingLeft:5,}}> 
          <TouchableOpacity style = {{flex:1,justifyContent:'flex-start',alignItems:'stretch'}} 
                            onPress = {() => this.openWebView(item,index)}
          >
         <Text style = {{color:'white',fontSize:10,fontStyle:'normal',fontWeight:'500',}}
               numberOfLines = {2}
         >{item.value}</Text>
         <Text style = {{color:'white',fontSize:10,fontStyle:'normal',fontWeight:'300',marginTop:3}}>{formatteddate}</Text>
       
       
        </TouchableOpacity>
         </View>  
        
        
 

      
       </View> 
      );
  
  
   }
  
   removeWebView()
   {
     this.setState({showwebview:false});
   }
  
   
   
   render() {
  
     if (this.state.showIndicator)
     {
  
    return (
      <View style={styles.MainContainer}>
       <View style = {{height:210}}>
       <FlatList style = {{flex:1,backgroundColor:'transparent'}} 
                 data = {arrimage}
                 horizontal = {true}
                 renderItem = {({item,index}) => this._renderItem(item,index)}
                 keyExtractor = {(item) => item.imagekey}
                
       
       >
       </FlatList>  
      </View>
     
      <View style = {{flex:1,justifyContent:'center',alignItems:'center',}}>
       <ActivityIndicator size = 'large' color = 'white'/>
     
      </View>
     
      </View>
     
    
    
    );
    
  }
 
  else{

    if (!this.state.showwebview)
    {
   
    return (
      <View style={styles.MainContainer}>
       <View style = {{height:210}}>
       <FlatList style = {{flex:1,backgroundColor:'transparent'}} 
                 data = {arrimage}
                 horizontal = {true}
                 renderItem = {({item,index}) => this._renderItem(item,index)}
                 keyExtractor = {(item) => item.imagekey}
                
       
       >
       </FlatList>  
      </View>
      <View style = {{flex:1,flexDirection:'column',backgroundColor:'rgba(15, 48, 72, 1.0)',justifyContent:'flex-start',alignItems:'stretch'}}>
       <Text style = {{color:'white',fontWeight:'500',fontSize:16,marginLeft:5}}>Latest News</Text>
       <FlatList style = {{backgroundColor:'',flex:1,marginTop:10}} 
                 data = {this.state.titlearray}
                 horizontal = {false}
                 renderItem = {({item,index}) => this._renderItemsecondList(item,index)}
                 keyExtractor = {(item) => item.value}
                
       
       >
       </FlatList>
     
      
      </View>  
      
      
      
      </View>
    );
  
    }
   else{

     let htmlstring = this.state.selectedDict.value;
         // htmlstring = htmlstring.replace(' ','');
         htmlstring = htmlstring.replace(/&lt;/g,'<');
         htmlstring = htmlstring.replace(/&gt;/g,'>');
        //  htmlstring = htmlstring.replace(/&;/g,'>');
      //  htmlstring = htmlstring.replace(/DHL/g,'faizan') ;
      const htmlStyles = { p: {fontSize:15} };
         
      return (
      <View style={styles.MainContainer}>
       <View style = {{height:210}}>
       <FlatList style = {{flex:1,backgroundColor:'transparent'}} 
                 data = {arrimage}
                 horizontal = {true}
                 renderItem = {({item,index}) => this._renderItem(item,index)}
                 keyExtractor = {(item) => item.imagekey}
                
       
       >
       </FlatList>  
      </View>
      <View style = {{flex:1,flexDirection:'column',backgroundColor:'rgba(15, 48, 72, 1.0)',justifyContent:'flex-start',alignItems:'stretch'}}>
       <Text style = {{color:'white',fontWeight:'500',fontSize:16,marginLeft:5}}>Latest News</Text>
       <FlatList style = {{backgroundColor:'',flex:1,marginTop:10}} 
                 data = {this.state.titlearray}
                 horizontal = {false}
                 renderItem = {({item,index}) => this._renderItemsecondList(item,index)}
                 keyExtractor = {(item) => item.value}
                
       
       >
       </FlatList>
     
      
      </View>  
      
      <View style = {{width:screenWidth-30,
         height:(screenHeight-130),
        margin:15,
        position:'absolute',
        backgroundColor:'rgba(15, 48, 72, 1.0)',
        borderColor:'white',
        borderWidth:2,
        borderRadius:10,
        }
        }
       
       >
       <View style = {{backgroundColor:'rgba(15, 48, 72, 1.0)',flexDirection:'row',height:40,
        borderRadius:10,alignItems:'center'}}>
        <TouchableOpacity style = {{width:40,height:40,}}
                          onPress = {this.removeWebView.bind(this)} 
        >
         <Image style = {{width:25,height:25,resizeMode:'contain',margin:8}}
                source = {require('./../images/cancel_but.png')}

         
         > 

          </Image> 
        
         </TouchableOpacity>
        <Text style = {{flex:1,color:'white',fontSize:14,fontWeight:'500',fontStyle:'normal',backgroundColor:'',
        textAlign:'center',
        marginRight:20}} >LATEST NEWS</Text>
       
       
       </View>
       <WebView style = {{flex:1,marginTop:1,}}
                // source={{html: `<p>​</p><p style="text-align&#58;center !important;">
                // <strong>Pioneering New Islamic Economy Products Launched in Dubai </strong></p><p style="text-align&#58;center !important;"><strong></strong>&#160;</p><ul><li style="text-align&#58;center !important;">
                //    <em>Announcement on new solutions made at '3</em><em><sup>rd</sup></em><em> Session&#58; International Innovative Platform of Islamic Economy Products' helping to support Dubai's position as Capital of Islamic Economy</em></li></ul><p>
                // <em>&#160;</em></p><p style="text-align&#58;justify;">Three new and unique solutions were launched in Dubai today at the 3<sup>rd</sup> Session&#58; International Innovative Platform for Islamic Economy Products (IIPIEP 2018). The event, which was organized by Dubai Airport Freezone Authority (DAFZA) in cooperation with International Center of Islamic Economy (ICIE), helps to establish Dubai's leading position as the capital of Islamic Economy across the globe. </p><p style="text-align&#58;justify;">The first product launched was the 'Exchangeable Sukuk', which has been created to mobilize resources using Sukuk that are tradable and don't require the utilization of bank assets. Other specific properties for the Sukuk include obtaining high credit card ratings and allowing for additional returns to economize on the costs of the structure. The Sukuk was developed by a team of experts at the Islamic Development Bank in collaboration with international investment banks. It was also approved by the Shar'iah Committee of the Islamic Development Bank and cleared by several technical committees.</p><p style="text-align&#58;justify;">The second product announced was the 'Awqaf Fund' which aims to create a new simple sustainable product for anyone who wants to put their money into 'waqf' - an endowment made to a religious, educational or charitable cause. The 'Awqaf Fund' will be combined with a number of diverse financial risk products allowing greater control over assets in order to achieve better returns on capital. </p><p style="text-align&#58;justify;">The 'Flexible Credit Card' was the third product launched at IIPIEP 2018, which seeks to combine investment with funding, whereby the customer gets balance in credit and at the same time an investment account. This product falls under Sharia compliance for both investments and funding. &#160;</p><p style="text-align&#58;justify;">Commenting on the event, Nasser Al Madani, Assistant Director General at DAFZA highlighted the key role that IIPIEP 2018 plays in supporting the growth of the national economy and specifically Islamic Economy. He explained that&#58; &quot;IIPIEP provides the ideal platform for innovative Islamic Economy products, services, and mechanisms that support the development of the sector and increases public trust and awareness in Islamic banking.&quot; </p><p style="text-align&#58;justify;">Al Madani also commented that &quot;IIPIEP supports the three main pillars of DAFZA's strategy for Islamic economy, which is based on detailed and insightful market studies and research. The strategy aims to attract direct foreign investments and new investment opportunities. In order to realize these objectives, the market must have a well-established legal and procedural system, as well as developed services that foster trust amongst investors.&quot;</p><p>Abdullah Mohammed Al Awar, Chief Executive Officer of the Dubai Islamic Economy Development Centre, said&#58; &quot;It is important that we witness innovation of this type as it sets a great precedent within Islamic economy. These innovations have helped us create products that are focused on achieving important goals, such as sustainability, growth and economic and social fairness. These solutions mark a qualitative shift in the functionality of investment and reflect the essence of culture within Islamic economy, which shifts the balance from elite to social.&quot;</p><p>Sultan Al Howymel, CEO of the International Center of Islamic Economy commented&#58; &quot;This global platform is dedicated to establishing a culture of innovation and an integrated approach to the advancement of the Islamic economic system. They key aim is to achieve a sustainable economy.&quot;</p><p>Al Howymel also commented on the importance of cooperation with DAFZA and the strategic partners to create an interactive platform that bridges the gap between decision-makers, government officials and economic and financial establishments. He highlighted that the collaboration also helps set up a specific mechanism to motivate innovators in the global economy to cope with rapid changes, stressing the Center's determination to continue efforts to promote leadership in the development of initiatives and applications of the global Islamic economy.</p><p style="text-align&#58;justify;">Mohammed Qasim Al Ali, CEO of National Bonds added&#58; &quot;National Bonds is proud to sponsor the International Innovative Platform for Islamic Economy Products. The race for innovation is competitive and we are trying to be at the forefront by creating new and innovative tools that will help us secure the financial future of our societies. For us to be successful, we must take an innovative approach to development and overcome any obstacles to achieve our objective.&quot; </p><p style="text-align&#58;justify;">Abdulrazzak Mohammed Al Khraijy, Head of Shar'iah Group of National Commercial Bank, said&#58; &quot;We are proud of our partnerships with a number of key of institutions, companies and banks that are working to develop the Islamic economy. Our participation in this platform is part of the Bank's strategy to support and promote events and activities at local, regional and global level. This will contribute to the development of the Islamic Economic industry which has proved to the world its effectiveness in terms of objectivity and productivity.&quot; </p><p style="text-align&#58;justify;">Held at Grand Hyatt Dubai, the event was attended by industry experts, innovators, and decision-makers. It was supported by Alinma Bank, Islamic Development Bank and Dubai Islamic Economy Development Centre, sponsored by National Bonds and National Commercial Bank. The 1<sup>st</sup> Session of IIPIEP was launched in 2015, and aims to encourage innovation and creativity in developing new products and services that are compliant with Islamic Shar'iah principles.</p>`}}
                javaScriptEnabled={true}
              //  onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                scrollEnabled={true}
                source={{html: htmlstring}}
              //  style={{height: Number(this.state.height)}}
                domStorageEnabled={true}
                scalesPageToFit={true}
                decelerationRate="normal"
                javaScriptEnabledAndroid={true}
               
       
       
       >
       
       </WebView>
       
       </View>  
      
     
     
      </View>
    
     
    
    );
  
    }
  
  }
 

}
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    //paddingTop: 20,
   // alignItems: 'center',
   // marginTop: 50,
    justifyContent:'flex-start',
    backgroundColor:'rgba(15, 48, 72, 1.0)',
  },tabsContainer: {
     width:65,
     marginRight:5,
  },
  tabStyle: {
    //custom styles
   
    borderColor:'white' ,
    backgroundColor:'white',
  },
  firstTabStyle: {
    //custom styles
   
  //  tintColor:
 

},
  lastTabStyle: {
    //custom styles
  
  },
  tabTextStyle: {
    //custom styles
    color:'rgba(15, 48, 72, 1.0)',
  },
  activeTabStyle: {
    //custom styles
    backgroundColor:'rgba(15, 48, 72, 1.0)',
 
  },
  activeTabTextStyle: {
    //custom styles
  color:'white',
  },
  tabBadgeContainerStyle: {
    //custom styles
  },
  activeTabBadgeContainerStyle: {
    //custom styles
  },
  tabBadgeStyle: {
    //custom styles
  },
  activeTabBadgeStyle: {
    //custom styles
  },

});