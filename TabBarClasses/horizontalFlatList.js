import React,{Componenet} from 'react';
import {Text,TextInput,View,TouchableOpacity,StyleSheet,Alert,TouchableHighlight,FlatList,c,AppRegistry,Platform,Dimensions} from 'react-native';
import{horizantalStatus} from './HorizontalFlatListdata'
import {horizontalFlatListDataitem} from './HorizontalFlatListdata'
import Icons from 'react-native-vector-icons/Ionicons'
class HoriZontalFlatListitem {
 render(){
return (
    <View style = {{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        width:90,
        borderWidth:1,
        margin : 4,
        borderRadius:10,
        borderColor:'grey',
    }}>
       
     <Text style = {{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
         margin:8
     }}>
     {this.props.item.hour}
      </Text>
      <Icons name = {(Platform.OS === 'ios') ? item.status.ios : item.status.android}
             size = {30}
             color = 'white'
      >
      
      </Icons>
      <Text style = {{
        fontSize:16,
        color:'white',
         margin:16,
     }}>
     {this.props.item.degree}
      </Text>
      
      </View>

) ;

 }

}





export class horizontalFlatList extends React.Component
{
    
    
    _renderItem = (item,index) => {
        const screenWidth = Math.round(Dimensions.get('window').width);
        return (
            <View style = {{
              //  flex:0.5,
                flexDirection:'column',
                alignItems:'center',
               // width:'100%',
                width:screenWidth,
              //  height:100,
                borderWidth:1,
                margin : 4,
                borderRadius:10,
                borderColor:'grey',
            }}>
               
             <Text style = {{
                fontSize:16,
                fontWeight:'bold',
                color:'white',
                 margin:8
             }}>
             {item.hour}
              </Text>
              <Icons name = {(Platform.OS === 'ios') ? item.status.ios : item.status.android}
             size = {30}
             color = 'white'
              >

      </Icons>
             
              <Text style = {{
                fontSize:16,
                color:'white',
                 margin:16,
             }}>
             {item.degree}
              </Text>
              
              </View>
        
        ) ;
      };
    
    
    render() {
        const param = this.props.navigation.state.params;
        const {navigation} = this.props;
       
        return (
          <View style={{ flex: 1,flexDirection:'column',marginTop:Platform.OS === 'ios' ? 34 : 0}}>
           <View style = {{height:150}}>
            <FlatList style = {{backgroundColor:'black',opacity:0.5,flex:1}}
                      horizontal = {true}
                      data={horizontalFlatListDataitem}
                    //   renderItem = {({item,index}) =>{
                    //     return (
                    //        <HoriZontalFlatListitem item={item} index={index} parentFlatList={this}>

                    //        </HoriZontalFlatListitem>
                    //     )
                      
                    // }
                    
                    // }
                    renderItem = {({item,index}) => this._renderItem(item,index)}
                    
                    
           
           >

            </FlatList>    
           
           </View>    
          </View>   
        );
      }
    }


export default (horizontalFlatList)