import React from 'react';
import {Text,ScrollView,StyleSheet,View} from 'react-native'

export class scrollbarComponenet extends React.Component
{
    
   
    static navigationOptions = {
         title : 'scrollView',
    };
    
   
    constructor(){
       super()
      this.state = {
        firstVar:'',
        ListItem:[
        {name:'list1',id:1},
        {name:'list2',id:1},
        {name:'list3',id:1},
        {name:'list4',id:1},
        {name:'list5',id:1},
        {name:'list6',id:1},
        {name:'list7',id:1},
        {name:'list8',id:1},
        {name:'list9',id:1},
        {name:'list10',id:1},
        {name:'list11',id:1},
        {name:'list12',id:1},
        {name:'list13',id:1},

        


        ]
      
    }
   
 
    }


   makeList = (item) =>
   (
      <Text
       style = {styles.list}
       key={item.id}
       >{item.name}</Text>

   
   );

  
  render(){
    return(
        <View style={{backgroundColor:'white',margin:10}}>

         

       <Text>Scroll View</Text>

            <ScrollView>

               {this.state.ListItem.map(this.makeList)}

            </ScrollView>

    </View> 
    )
   
}



}
   export  default scrollbarComponenet;

   const styles = StyleSheet.create({
    list:{
     margin:15,
     padding:10,
     height:40,
     borderColor:'grey',
     borderWidth:1,
   
    },

   })

