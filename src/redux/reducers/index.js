import { combineReducers } from 'redux'
// import auth from './authReducer'
import TodoReducer from './todoReducer'
import GameBauCuaReducer from './GameBauCuaReducer'
import authReducer from './authReducer'
export default combineReducers({ 
    authReducer, 
    TodoReducer,
    GameBauCuaReducer
})