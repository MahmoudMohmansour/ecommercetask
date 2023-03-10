import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import {composeWithDevTools } from 'redux-devtools-extension'

const intialstate={}
const meddleware=[thunk]

const store=createStore(rootReducer ,intialstate,composeWithDevTools(applyMiddleware(...meddleware)))

export default store;