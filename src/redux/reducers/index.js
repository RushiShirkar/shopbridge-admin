import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Products from "./products";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  products: Products
});

export default createRootReducer
