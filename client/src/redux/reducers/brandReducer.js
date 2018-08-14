import { 
    UPDATE_BRANDS_LIST,
    GET_BRANDS_LIST,
    GET_BRAND,
    CREATE_BRAND,
    DELETE_BRAND,
    UPDATE_BRAND,    
} from '../actions/brandAction';

const brandReducer= (state = [], { type, payload }) => {
    switch(type){
        case CREATE_BRAND:
            return payload;
        case UPDATE_BRAND:
            return payload;
        case DELETE_BRAND:
            return payload;
        case UPDATE_BRANDS_LIST:
            return payload;
        case GET_BRANDS_LIST:
            return payload;
        case GET_BRAND:
            return payload;
        default:
            return state;
    }
};

export default brandReducer;