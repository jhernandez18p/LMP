import { 
    UPDATE_CARS_TYPE_LIST,
    GET_CARS_TYPE_LIST,
    GET_CARS_TYPE,
    CREATE_CARS_TYPE,
    DELETE_CARS_TYPE,
    UPDATE_CARS_TYPE,
} from '../actions/carsTypeAction'

const carReducer = (state = [], {type, payload}) => {
    switch (type) {
        case UPDATE_CARS_TYPE_LIST:
            return payload;
        case GET_CARS_TYPE_LIST:
            return payload;
        case GET_CARS_TYPE:
            return payload;
        case CREATE_CARS_TYPE:
            return payload;
        case DELETE_CARS_TYPE:
            return payload;
        case UPDATE_CARS_TYPE:
            return payload;
        default:
            return state;
    }
};

export default carReducer;