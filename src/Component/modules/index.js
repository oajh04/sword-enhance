import { combineReducers } from 'redux';
import StoreModule from './StoreModule';
import MyProfileModule from './MyProfileModule'

const rootReducer = combineReducers({ StoreModule, MyProfileModule });

export default rootReducer;