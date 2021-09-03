import {
  CREATE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_SUCCESS,
  SHOW_CONFIRM_REMOVE
} from "../../constants/ActionTypes";

const INIT_STATE = {
  loader: false,
  products: [],
  newproduct: {},
  showRemove: false,
  showEdit: false
};

export default function productsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SHOW_CONFIRM_REMOVE: {
      return {
        ...state,
        loader: false,
        showRemove: action.payload,
      };
    }
    case EDIT_PRODUCT_SUCCESS: {
      return {
        ...state,
        loader: false,
        showEdit: action.payload,
      };
    }
    case GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loader: false,
        products: action.payload,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loader: false,
        neeproduct: action.payload[0],
      };
    }
    case CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        loader: false,
        newproduct: action.payload,
      };
    }
    default:
      return state;
  }
}
