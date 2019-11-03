import {createStore,combineReducers} from 'redux'
import placeReducers from './reducers/placeReducer'
const rootReducer = combineReducers({
  places:placeReducers,
});

const configureStore = () =>{
    return createStore(rootReducer);
}

export default configureStore