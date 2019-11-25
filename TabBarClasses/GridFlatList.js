import React,{Componenet} from 'react';
import {Text,TextInput,View,TouchableOpacity,StyleSheet,Alert,TouchableHighlight,FlatList,Dimensions} from 'react-native';

const data = [{key:'A'},{key:'B'},{key:'C'},{key:'D'},{key:'E'},{key:'F'},{key:'G'},{key:'H'},{key:'I'},{key:'J'},
//{key:'K'},{key:'L'}
];

const noCoulmns = 3;

const formatdata = (data,noCoulmns) => {

const noOfFullRows = Math.floor(data.length/noCoulmns);
let noOfElementsInlastRow = (data.length - (noOfFullRows * noCoulmns));
 while(noOfElementsInlastRow !== noCoulmns && noOfElementsInlastRow !== 0)
 {
     data.push({key:`blank- ${noOfElementsInlastRow}`,empty:true});
     noOfElementsInlastRow = noOfElementsInlastRow +1;
 
}
 return data;
}


 


export class GridFlatList extends React.Component
{
    showAlert = (item) =>
    {
       Alert.alert(`value is ${item.key}`);
    }
  
  
    renderItem = ({item,index}) => {
    //  if(item.empty === true)
    //  {
    //    return <View style = {styles.item,styles.itemInvisible}/>  
    //  }
    
    return(
          <View style={styles.item}>
            
            <TouchableOpacity onPress = {()=> this.showAlert(item)}
                               style = {[styles.item,styles.touchOpacitystyle]}
                               >
           
            <Text style = {styles.itemtext}>{item.key}</Text >
            </TouchableOpacity> 
           </View>    
      );

   }
   
   
   
    render(){
    return (
     // <View style = {styles.container}>
       <FlatList data = {formatdata(data,noCoulmns)}
                 style = {styles.flatList}
                 renderItem = {this.renderItem}
                  numColumns = {noCoulmns}
       >

        </FlatList>   
      
      //</View>   
    );
     
   }

}

export default (GridFlatList);

const styles = StyleSheet.create(
  
    {
        
        container:{
           flex:1,
           flexDirection:'column',
           justifyContent:'center',
           alignItems:'center',
        },
        flatList:{
            flex:1,
            marginVertical:20,
           // marginHorizontal:20,
        },
        item:{
           
            height:Math.round(Dimensions.get('window').width)/noCoulmns,
            width:Math.round(Dimensions.get('window').width)/noCoulmns,
            justifyContent:'center',
            alignItems:'center',
            margin: 1,
            backgroundColor:'#441F35'
            
        },
        touchOpacitystyle:{
          //backgroundColor:'rgba(1,255,0,1.0)',
          backgroundColor:'transparent',
        },
        itemInvisible:{
            backgroundColor:'transparent'
        },
        itemtext:{
            color:'white',
        }
    }
);