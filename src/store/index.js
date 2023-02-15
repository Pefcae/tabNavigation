import { createStore, combineReducers } from 'redux';
//esta tachado por que dice que está deprecado, 
import { categoryReducer, productReducer } from './reducers';

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
});

export default createStore(rootReducer);
