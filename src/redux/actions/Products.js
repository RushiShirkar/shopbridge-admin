import axios from 'axios';
import {
  CREATE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_SUCCESS,
  SHOW_CONFIRM_REMOVE
} from "../../constants/ActionTypes";
import { notification } from "antd";
const module_link = "product"

export const createProduct = async (data, dispatch) => {
    try {
        const product = await axios.post(`/${module_link}/create/`, data);
        dispatch({
                type: CREATE_PRODUCT_SUCCESS,
                payload: product.data
        })
        await getAllProducts(dispatch);
    } catch (err) {
        notification["error"]({
            message: err?.response?.data.detail,
            description: "",
        });
        console.log(err.message);
    }
};

export const getAllProducts = async (dispatch) => {
    try {
        const products = await axios.get(`/${module_link}/view/`);
        dispatch({
                type: GET_ALL_PRODUCTS_SUCCESS,
                payload: products.data
        })
    } catch (err) {
        console.log(err);
    }
};

export const getProduct = async (productID, dispatch) => {
    try {
        const product = await axios.get(`/${module_link}/view/?id=${productID}`);
        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: product.data
        })
    } catch (err) {
        console.log(err);
    }
};

export const updateProduct = async (productID, data, dispatch) => {
        try {
            const product = await axios.put(`/${module_link}/update/${productID}`, data);
            dispatch({
                type: EDIT_PRODUCT_SUCCESS,
                payload: product.data
            })
            await getAllProducts(dispatch);
        } catch (err) {
            console.log(err);
        }
};

export const deleteProduct = async (productID, dispatch) => {
        try {
            await axios.delete(`/${module_link}/delete/${productID}`);
            dispatch({
                    type: SHOW_CONFIRM_REMOVE,
                    payload: false
            })
            await getAllProducts(dispatch);
        } catch (err) {
            console.log(err);
        }
};
