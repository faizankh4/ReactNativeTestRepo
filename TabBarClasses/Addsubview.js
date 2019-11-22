import React,{Componenet} from 'react';
import {Text,TextInput,View,TouchableOpacity,StyleSheet,Alert,TouchableHighlight,FlatList} from 'react-native';
import renderif from './renderif'

export class AddSubview extends React.Component
{
    static navigationOptions = {
        title: 'AddsubView!',
      };
   
      constructor(props){
        super(props)
        this.state = {
         status:true,
         listItem:[{key:'1'},
                   {key:'2'},
                   {key:'3'},
                   {key:'4'},
                   {key:'5'},
                   {key:'6'},
                   {key:'7'},
                   {key:'8'},
                  ],
            value:'0',     
       
        };
       }
    
       addSubview = ()=>
     {
         this.setState({status:!this.state.status})
     
         console.log('call')
    }
   
    removeSubView = (Item) =>
    {
      this.setState({status:false,value:Item.key})
    
    }
   
    renderSeparator = () => {  
      return (  
          <View  
              style={{  
                  height: 1,  
                 width: "100%",  
                  backgroundColor: "#000", 
                 // marginLeft:'14%',
              }}  
          > 
          </View> 
      );  
  };  
  
  
  renderSeparatorhorizontol = () => {  
    return (  
        <View  
            style={{  
                height:'100%',  
               width:1,  
                backgroundColor: "#000", 
               // marginLeft:'14%',
            }}  
        > 
        </View> 
    );  
};  
  
_renderItem = ({ item }) => {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: 'yellow',
        width: '100%',
        height: 100,
      }}>
      <Text>{item.key}</Text>
    </View>
  );
};
  render(){

//     if(this.state.status === true)
//     {
//            return (
//             <View style={styles.container}>
//                   <TouchableOpacity onPress = {() => this.addSubview()}>
//                   <Text>Addsubview</Text>
//                    </TouchableOpacity>
//                   </View>
//            );
//     } 
//    else{
//     return (
//         <View style={styles.container}>
//                  <View style = {styles.inputContainer}>
//                 </View>       
//               <TouchableOpacity onPress = {() => this.addSubview()}>
//               <Text>Addsubview</Text>
//                </TouchableOpacity>
//               </View>
//        );


//      } 

return (
     <View style={styles.container}>
     <View style = {{backgroundColor:'red',width:'100%',height:100,marginTop:20}} >
     <FlatList                                                  
     data = {[{key:'1'},
     {key:'2'},
     {key:'3'},
     {key:'4'},
     ]}
    //  renderItem = {({item}) => <View style={{backgroundColor:'green',marginBottom:0,width:100,height:100}}>
     
    //  </View>
    //  }                         
    renderItem={this._renderItem}
     
   // ItemSeparatorComponent = {this.renderSeparatorhorizontol}
   ItemSeparatorComponent={() => <View style={{margin: 4}}/>}
    keyExtractor = {item => item.key}
    horizontal={true}>
    </FlatList>
     
      </View>
     <Text style={{marginBottom:150}}>{this.state.value}</Text>
      
     {renderif(this.state.status)(
        <View style = {styles.inputContainer}>
      <FlatList                                                  
     data = {this.state.listItem}
     renderItem = {({item}) => <View style={{backgroundColor:'red',marginBottom:0,height:44,flexDirection:'row'}}>
     
     
     <View style = {{flex:1,backgroundColor:'yellow'}}>
     <TouchableOpacity  onPress = {() => this.removeSubView(item)}
                        style  = {{backgroundColor:'orange',flex:1,justifyContent:'center',alignItems:'center'}} 
     >                
     <Text>{item.key}</Text>
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

      {/* <TouchableHighlight onPress={()=>this.addSubview()}>
        <Text> touchme </Text>
      </TouchableHighlight> */}
      
      <TouchableOpacity onPress = {() => this.addSubview()}>
      <Text>Addsubview</Text>
     </TouchableOpacity>
   
   
    </View>
  ); 


  }

}

export default (AddSubview)

const styles = StyleSheet.create(
    {
       container:{
           flex:1,
           flexDirection:'column',
           justifyContent:'flex-start',
           alignItems:'center',
       },
       inputContainer:{
           width:'30%',
           height:'30%',
           backgroundColor:'green',
       }
    
    
    
    }
 )