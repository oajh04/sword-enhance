import { combineReducers } from 'redux';
import StoreModule from './StoreModule';
import MyProfileModule from './MyProfileModule'
import EnhanceModule from './EnhanceModule'

const rootReducer = combineReducers({ 
    StoreModule, 
    MyProfileModule,
    EnhanceModule,
});

export default rootReducer;