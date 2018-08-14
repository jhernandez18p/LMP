import { 
    UPDATE_CARS_LIST,
    GET_CARS_LIST,
    GET_CAR,
    CREATE_CAR,
    DELETE_CAR,
    UPDATE_CAR,
} from '../actions/carAction'

const carReducer = (state = [], {type, payload}) => {
    switch (type) {
        case UPDATE_CARS_LIST:
            return payload;
        case GET_CARS_LIST:
            return payload;
        case GET_CAR:
            return payload;
        case CREATE_CAR:
            return payload;
        case DELETE_CAR:
            return payload;
        case UPDATE_CAR:
            return payload;
        default:
            return state;
    }
};

export default carReducer;