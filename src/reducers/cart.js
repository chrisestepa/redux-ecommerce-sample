import {
    LOAD_CART_ITEMS,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM
} from '../actions/types';
import initialState from './initialState';

export default function cart(state = initialState.cart, action) {
    switch (action.type) {
        case LOAD_CART_ITEMS:
            return {
                state
            };

        case ADD_CART_ITEM:
            return {
                ...state,
                total: total + 1
            };

        case REMOVE_CART_ITEM:
            return {
                ...state,
                total: total -1
            };

        default:
            return state;

    }
}