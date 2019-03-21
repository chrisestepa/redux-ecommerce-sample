import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import productListReducer from './productListReducer';
import activeProductReducer from './activeProductReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    productListReducer,
    activeProductReducer,
    cartReducer
});

export default rootReducer;
