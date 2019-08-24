import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
 

const reducer = combineReducers({
    
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;