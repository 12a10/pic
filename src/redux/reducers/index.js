import { combineReducers } from 'redux'
// import auth from './authReducer'
import TodoReducer from './todoReducer'
import GameBauCuaReducer from './GameBauCuaReducer'

export default combineReducers({  
    TodoReducer,
    GameBauCuaReducer
})