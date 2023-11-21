import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';


const rootReaducer = combineReducers({
    contact: contactReducer,
    filter: filterReducer
})


const enhancer = devToolsEnhancer();

export const store = createStore(rootReaducer, enhancer);

