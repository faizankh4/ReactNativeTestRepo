import React from 'react';
import {Text,StyleSheet,View,SafeAreaView,FlatList,Alert,Image,SearchBar,ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

 export class FlatListScreen extends React.Component
 {
    
    constructor(props){
     super(props)
     this.state = {
      loading:false,
      data:[],
      page:1,
      seed:1,
      error:null,
      refreshing:false,
      

     };
    }
   
   componentDidMount(){
     this.makeRemoteRequest();
   }
   
   makeRemoteRequest = () =>
   {
      const {page,seed} = this.state;
      const url = 'https://randomuser.me/api/?seed=${seed}&page=${page}&results=20';
      this.setState({loading:true});
      fetch(url)
      .then(res => res.json())
      .then(res =>{
        this.setState({
          data: page === 1 ? res.results : [...this.state.data,...res.results],error:res.error || null, loading:false,refreshing:false
        
         });
      
      })
      .catch(error =>{
         this.setState({error:error,loading:false})
      });
         
   

   };
  
   renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "86%",  
                    backgroundColor: "#000", 
                    marginLeft:'14%',
                }}  
            > 
            </View> 
        );  
    };  
 
    renderHeader = () => {
      return <SearchBar placeholder="Type Here..." lightTheme round/>;
    };
 
 renderFooter = () => {

   if (this.state.loading)
   {
      return null;
   }
  
   
   return (
     <View style = {{paddingVertical:20,borderColor:'green',borderWidth:1,backgroundColor:'transparent'}}> 
   
      <ActivityIndicator animating size='large'/>
     
     </View>
      );
  


}
    
    
    getlistItem = (item) => {

   // Alert.alert(item.location.country);
    this.props.navigation.navigate({routeName:'ListDetailBarScreen',key:'main0',params:{item:item}});
   
   };
 
render(){
   return(
    <View style = {styles.container}>
    
    <FlatList  
   //  data = {[{key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
   //  {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
   //  {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
   //  {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
   //  {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
   //  {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
   //  {key: 'Rails'},{key: '.Net'},{key: 'Perl'}]}
    // renderItem = {({item}) => <Text style = {styles.item}
    //                               onPress = {() => this.getlistItem(item)}>{item.key}</Text>
                                  
                                 
                                  
    //                               }
        
    //  renderItem = {({item}) => <TouchableOpacity style = {styles.item}
    //                                             onPress = {() => this.getlistItem(item)}>
    //                                              <Text style = {{color:'green'}}>{item.key}</Text>   
    //                                             </TouchableOpacity>}
                               
                                   
     data = {this.state.data}
     renderItem = {({item}) => <View style={{flexDirection:'row',backgroundColor:'transparent',marginBottom:2,height:44,alignItems:'center'}}>
     <View style = {{width:42,height:42,backgroundColor:'white'}}>
     <Image
          style={{width: 42, height: 42,borderRadius:42/2,overflow:'hidden',borderColor:'grey'}}
          source={{uri:item.picture.thumbnail}}
        />
     </View>    
     <View style={{flex:1.0,backgroundColor:'white',paddingLeft:5}}>
       <TouchableOpacity onPress = {() => this.getlistItem(item)}>
      
        <Text style = {{color:'black',fontSize:12,fontStyle:'normal',fontWeight:'bold',marginTop:5}}>{item.name.title + ' ' + item.name.first + ' ' + item.name.last}</Text> 
        <Text style = {{color:'grey',fontSize:10,fontStyle:'normal',fontWeight:'normal',marginTop:5}}>{item.email}</Text>  
        </TouchableOpacity>
     </View>
     <Image
          style={{width: 25, height: 25}}
          source={require('./../images/right_arrow.png')}
        />
     </View>
     }                         
     
    ItemSeparatorComponent = {this.renderSeparator}
    keyExtractor = {item => item.email}
    horizontal={false}
    //ListHeaderComponent = {this.renderFooter}
    //ListFooterComponent = {this.renderFooter}
       >
    </FlatList>   
    </View>
   );

}



};
     







export default FlatListScreen;

const styles = StyleSheet.create ({
 item:{
    padding:10,
     margin:15,
    // marginBottom:10,
    // marginLeft:10,
    // marginRight:10,
    // marginTop:10,

    height:44,
    borderColor:'red',
    borderWidth:1,
 },
 container:{
  flex:1,
 },


});