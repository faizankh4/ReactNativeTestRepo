import React,{Componenet} from 'react';
import {Text,TextInput,View,TouchableOpacity,StyleSheet,Alert,TouchableHighlight} from 'react-native';
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
        };
       }
    
       addSubview = ()=>
     {
         this.setState({status:!this.state.status})
     
         console.log('call')
    }
   
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
     {renderif(this.state.status)(
        <View style = {styles.inputContainer}>
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
           justifyContent:'center',
           alignItems:'center',
       },
       inputContainer:{
           width:'30%',
           height:'30%',
           backgroundColor:'green',
       }
    
    
    
    }
 )