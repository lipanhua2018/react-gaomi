import { combineReducers } from 'redux'
import {
    ADD_TO_PUBLIC,
    DELETE_TO_PUBLIC,
    UPDATE_TO_PUBLIC,
    PUSH_TO_LEVEL,
    DELETE_TO_LEVEL
} from '../actions'

const initSate = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        },
        {
            product: 'Coffee 500ml',
            quantity: 1,
            unitCost: 250
        }
    ]
}

const initLevel = ['返回首页','当前位置']


const productReducer = function (state = initLevel, action) {
    switch (action.type) {
        case PUSH_TO_LEVEL: 
            //let arr = [...state, action.payload];   
            let arr = [...state];
                if (arr.length >= 3) {
                    arr.splice(2, arr.length);
                    if (Object.prototype.toString.call(action.payload) === '[object Array]'){
                        let arry = [...action.payload];
                        arr = arr.concat(arry);
                        return arr;
                    }
                    if (Object.prototype.toString.call(action.payload) === '[object String]') {
                        arr.push(action.payload);                       
                    }  
                    return arr;  
                } else {
                    if (Object.prototype.toString.call(action.payload) === '[object Array]'){
                        let arry = [...action.payload];
                        arr = arr.concat(arry);
                        return arr;
                    }
                    if (Object.prototype.toString.call(action.payload) === '[object String]') {
                        arr.push(action.payload);                       
                    }   
                    return arr;                
                }               
                
        
        case DELETE_TO_LEVEL:
            let ar = [...state];               
            let ary = ar.filter ((item) => {
                    if (item !== action.payload) {
                        return item
                    }
                })             
        return ary;
        
        default:
        return state;
    }
}


const publicReducer = function (state = initSate, action) {
    switch (action.type) {
        case ADD_TO_PUBLIC:
            let obj = {
                ...state,
                cart: [...state.cart, action.payload]
            }            
        return obj;

        case UPDATE_TO_PUBLIC:
        return {
            ...state,
            cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
        }

        case DELETE_TO_PUBLIC: {
            return {
              ...state,
              cart: state.cart.filter(item => item.product !== action.payload.product)
            }
        }

        default:
        return state;
    }
}

const reducers = combineReducers({
    productReducer,
    publicReducer
})

export default reducers