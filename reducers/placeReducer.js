import {ADD_PLACE} from './../action/types';
const intialState = {

    placeName :'',
    places:[],

};

const placeReducer = (state = intialState,action) => {

  switch(action.type)
  {
   case ADD_PLACE:   
   return {
      ...state,
         places:state.places.concat({
           key:Math.random(),
           value:action.payLoad, 
         })
   
     };
     default:
         return state;

  }

}

export default placeReducer