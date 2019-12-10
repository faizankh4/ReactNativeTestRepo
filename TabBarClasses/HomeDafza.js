import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text ,Button,Platform,Image,Alert,FlatList,Dimensions,ActivityIndicator,TouchableOpacity} from 'react-native';
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
        xmlString:{}
     
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
          IDArray:idarraylocal,NewsDatearray:NewsDataArrayreverse,PublishingPageContentArray:PublishingPageContentlocal
        
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
          <TouchableOpacity style = {{flex:1,justifyContent:'flex-start',alignItems:'stretch'}} >
         <Text style = {{color:'white',fontSize:10,fontStyle:'normal',fontWeight:'500',}}
               numberOfLines = {2}
         >{item.value}</Text>
         <Text style = {{color:'white',fontSize:10,fontStyle:'normal',fontWeight:'300',marginTop:3}}>{formatteddate}</Text>
       
       
        </TouchableOpacity>
         </View>  
        
        
 

      
       </View> 
      );
  
  
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

    return (
      <View style={styles.MainContainer}>
       <View style = {{height:210}}>
       <FlatList style = {{flex:1,backgroundColor:'transparent'}} 
                 data = {arrimage}
                 horizontal = {true}
                 renderItem = {({item,index}) => this._renderItem(item,index)}
                 keyExtractor = {(item) => item.value}
                
       
       >
       </FlatList>  
      </View>
      <View style = {{flex:1,flexDirection:'column',backgroundColor:'rgba(15, 48, 72, 1.0)',justifyContent:'flex-start',alignItems:'stretch'}}>
       <Text style = {{color:'white',fontWeight:'500',fontSize:16,marginLeft:5}}>Latest News</Text>
       <FlatList style = {{backgroundColor:'',flex:1,marginTop:10}} 
                 data = {this.state.titlearray}
                 horizontal = {false}
                 renderItem = {({item,index}) => this._renderItemsecondList(item,index)}
                 keyExtractor = {(item) => item.imagekey}
                
       
       >
       </FlatList>
     
      
      </View>  
      
      
      
      </View>
    );
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